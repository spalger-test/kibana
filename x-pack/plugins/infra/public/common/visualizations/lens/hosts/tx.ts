/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { type Filter, FilterStateStore } from '@kbn/es-query';
import type {
  FormBasedLayer,
  FormulaPublicApi,
  PersistedIndexPatternLayer,
  XYState,
} from '@kbn/lens-plugin/public';
import type { DataView } from '@kbn/data-views-plugin/public';
import type { SavedObjectReference } from '@kbn/core-saved-objects-common';
import {
  DEFAULT_LAYER_ID,
  getBreakdownColumn,
  getHistogramColumn,
  getXYVisualizationState,
} from '../utils';
import type { LensOptions } from '../../../../types';
import { ILensVisualization } from '../types';

const BREAKDOWN_COLUMN_NAME = 'hosts_aggs_breakdown';
const HISTOGRAM_COLUMN_NAME = 'x_date_histogram';

export class TX implements ILensVisualization {
  constructor(
    private dataView: DataView,
    private options: LensOptions,
    private formula: FormulaPublicApi
  ) {}

  getTitle(): string {
    return 'Network Outbound (TX)';
  }

  getVisualizationType(): string {
    return 'lnsXY';
  }

  getLayers = (): Record<string, Omit<FormBasedLayer, 'indexPatternId'>> => {
    const baseLayer: PersistedIndexPatternLayer = {
      columnOrder: [BREAKDOWN_COLUMN_NAME, HISTOGRAM_COLUMN_NAME],
      columns: {
        ...getBreakdownColumn(BREAKDOWN_COLUMN_NAME, 'host.name', this.options.breakdownSize),
        ...getHistogramColumn(HISTOGRAM_COLUMN_NAME, this.dataView.timeFieldName ?? '@timestamp'),
      },
    };

    const dataLayer = this.formula.insertOrReplaceFormulaColumn(
      'y_network_out_bytes',
      {
        formula:
          "counter_rate(max(system.network.out.bytes), kql='system.network.out.bytes: *') * 8",
        timeScale: 's',
        format: {
          id: 'bits',
          params: {
            decimals: 1,
          },
        },
      },
      baseLayer,
      this.dataView
    );

    if (!dataLayer) {
      throw new Error('Error generating the data layer for the chart');
    }

    return { [DEFAULT_LAYER_ID]: dataLayer };
  };
  getVisualizationState = (): XYState => {
    return getXYVisualizationState({
      layers: [
        {
          layerId: DEFAULT_LAYER_ID,
          seriesType: 'line',
          accessors: ['y_network_out_bytes'],
          yConfig: [],
          layerType: 'data',
          xAccessor: HISTOGRAM_COLUMN_NAME,
          splitAccessor: BREAKDOWN_COLUMN_NAME,
        },
      ],
    });
  };
  getFilters = (): Filter[] => {
    return [
      {
        meta: {
          disabled: false,
          negate: false,
          alias: null,
          index: '3be1e71b-4bc5-4462-a314-04539f877a19',
          key: 'system.network.out.bytes',
          value: 'exists',
          type: 'exists',
        },
        query: {
          exists: {
            field: 'system.network.out.bytes',
          },
        },
        $state: {
          store: FilterStateStore.APP_STATE,
        },
      },
    ];
  };

  getReferences = (): SavedObjectReference[] => {
    return [
      {
        type: 'index-pattern',
        id: this.dataView.id ?? '',
        name: `indexpattern-datasource-layer-${DEFAULT_LAYER_ID}`,
      },
    ];
  };
}
