/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import { intersection } from 'lodash';
import datemath, { Unit } from '@kbn/datemath';
import { SavedObjectsClientContract } from '@kbn/core/server';
import moment from 'moment';
import { ConfigKey } from '../../../common/runtime_types';
import {
  getAllMonitors,
  processMonitors,
} from '../../saved_objects/synthetics_monitor/get_all_monitors';
import { UptimeServerSetup } from '../../legacy_uptime/lib/adapters';
import { queryMonitorStatus } from '../../queries/query_monitor_status';
import { SYNTHETICS_API_URLS } from '../../../common/constants';
import { UMServerLibs } from '../../legacy_uptime/uptime_server';
import { SyntheticsRestApiRouteFactory } from '../../legacy_uptime/routes';
import { UptimeEsClient } from '../../legacy_uptime/lib/lib';
import { SyntheticsMonitorClient } from '../../synthetics_service/synthetics_monitor/synthetics_monitor_client';
import { getMonitorFilters, OverviewStatusSchema, OverviewStatusQuery } from '../common';

/**
 * Helper function that converts a monitor's schedule to a value to use to generate
 * an appropriate look-back window for snapshot count.
 * @param schedule a number/unit pair that represents how often a configured monitor runs
 * @returns schedule interval in ms
 */
export function periodToMs(schedule: { number: string; unit: Unit }) {
  if (Object.keys(datemath.unitsMap).indexOf(schedule.unit) === -1) return 0;

  return parseInt(schedule.number, 10) * datemath.unitsMap[schedule.unit].base;
}

/**
 * Multi-stage function that first queries all the user's saved object monitor configs.
 *
 * Subsequently, fetch the status for each monitor per location in the data streams.
 * @returns The counts of up/down/disabled monitor by location, and a map of each monitor:location status.
 */
export async function getStatus(
  server: UptimeServerSetup,
  uptimeEsClient: UptimeEsClient,
  soClient: SavedObjectsClientContract,
  syntheticsMonitorClient: SyntheticsMonitorClient,
  params: OverviewStatusQuery
) {
  const { query, locations: queryLocations } = params;
  /**
   * Walk through all monitor saved objects, bucket IDs by disabled/enabled status.
   *
   * Track max period to make sure the snapshot query should reach back far enough to catch
   * latest ping for all enabled monitors.
   */

  const filtersStr = getMonitorFilters({
    ...params,
    serviceLocations: syntheticsMonitorClient.syntheticsService.locations,
  });
  const allMonitors = await getAllMonitors({
    soClient,
    search: query ? `${query}*` : undefined,
    filter: filtersStr,
    fields: [
      ConfigKey.ENABLED,
      ConfigKey.LOCATIONS,
      ConfigKey.MONITOR_QUERY_ID,
      ConfigKey.CONFIG_ID,
      ConfigKey.SCHEDULE,
      ConfigKey.MONITOR_SOURCE_TYPE,
    ],
  });

  const {
    enabledMonitorQueryIds,
    allIds,
    disabledCount,
    maxPeriod,
    listOfLocations,
    monitorLocationMap,
    disabledMonitorsCount,
    projectMonitorsCount,
    monitorQueryIdToConfigIdMap,
  } = await processMonitors(allMonitors, server, soClient, syntheticsMonitorClient);

  // Account for locations filter
  const queryLocationsArray =
    queryLocations && !Array.isArray(queryLocations) ? [queryLocations] : queryLocations;
  const listOfLocationAfterFilter = queryLocationsArray
    ? intersection(listOfLocations, queryLocationsArray)
    : listOfLocations;

  const range = {
    from: moment().subtract(maxPeriod, 'milliseconds').subtract(20, 'minutes').toISOString(),
    to: 'now',
  };

  const { up, down, pending, upConfigs, downConfigs, pendingConfigs } = await queryMonitorStatus(
    uptimeEsClient,
    listOfLocationAfterFilter,
    range,
    enabledMonitorQueryIds,
    monitorLocationMap,
    monitorQueryIdToConfigIdMap
  );

  return {
    allIds,
    allMonitorsCount: allMonitors.length,
    disabledMonitorsCount,
    projectMonitorsCount,
    enabledMonitorQueryIds,
    disabledCount,
    up,
    down,
    pending,
    upConfigs,
    downConfigs,
    pendingConfigs,
  };
}

export const createGetCurrentStatusRoute: SyntheticsRestApiRouteFactory = (libs: UMServerLibs) => ({
  method: 'GET',
  path: SYNTHETICS_API_URLS.OVERVIEW_STATUS,
  validate: {
    query: OverviewStatusSchema,
  },
  handler: async ({
    server,
    uptimeEsClient,
    savedObjectsClient,
    syntheticsMonitorClient,
    request,
  }): Promise<any> => {
    const params = request.query as OverviewStatusQuery;
    return await getStatus(
      server,
      uptimeEsClient,
      savedObjectsClient,
      syntheticsMonitorClient,
      params
    );
  },
});
