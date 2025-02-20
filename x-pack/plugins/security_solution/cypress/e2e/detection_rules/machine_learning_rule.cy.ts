/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { formatMitreAttackDescription } from '../../helpers/rules';
import { getMachineLearningRule } from '../../objects/rule';

import {
  CUSTOM_RULES_BTN,
  RISK_SCORE,
  RULE_NAME,
  RULE_SWITCH,
  SEVERITY,
} from '../../screens/alerts_detection_rules';
import {
  ABOUT_DETAILS,
  ABOUT_RULE_DESCRIPTION,
  ADDITIONAL_LOOK_BACK_DETAILS,
  ANOMALY_SCORE_DETAILS,
  DEFINITION_DETAILS,
  FALSE_POSITIVES_DETAILS,
  removeExternalLinkText,
  MACHINE_LEARNING_JOB_ID,
  // MACHINE_LEARNING_JOB_STATUS,
  MITRE_ATTACK_DETAILS,
  REFERENCE_URLS_DETAILS,
  RISK_SCORE_DETAILS,
  RULE_NAME_HEADER,
  RULE_TYPE_DETAILS,
  RUNS_EVERY_DETAILS,
  SCHEDULE_DETAILS,
  SEVERITY_DETAILS,
  TAGS_DETAILS,
  TIMELINE_TEMPLATE_DETAILS,
} from '../../screens/rule_details';

import { getDetails } from '../../tasks/rule_details';
import { expectNumberOfRules, goToRuleDetails } from '../../tasks/alerts_detection_rules';
import { cleanKibana } from '../../tasks/common';
import {
  createAndEnableRule,
  fillAboutRuleAndContinue,
  fillDefineMachineLearningRuleAndContinue,
  fillScheduleRuleAndContinue,
  selectMachineLearningRuleType,
} from '../../tasks/create_new_rule';
import { login, visitWithoutDateRange } from '../../tasks/login';

import { RULE_CREATION } from '../../urls/navigation';

describe('Detection rules, machine learning', () => {
  const expectedUrls = getMachineLearningRule().referenceUrls.join('');
  const expectedFalsePositives = getMachineLearningRule().falsePositivesExamples.join('');
  const expectedTags = getMachineLearningRule().tags.join('');
  const expectedMitre = formatMitreAttackDescription(getMachineLearningRule().mitre);
  const expectedNumberOfRules = 1;

  before(() => {
    cleanKibana();
    login();
    visitWithoutDateRange(RULE_CREATION);
  });

  it('Creates and enables a new ml rule', () => {
    selectMachineLearningRuleType();
    fillDefineMachineLearningRuleAndContinue(getMachineLearningRule());
    fillAboutRuleAndContinue(getMachineLearningRule());
    fillScheduleRuleAndContinue(getMachineLearningRule());
    createAndEnableRule();

    cy.get(CUSTOM_RULES_BTN).should('have.text', 'Custom rules (1)');

    expectNumberOfRules(expectedNumberOfRules);

    cy.get(RULE_NAME).should('have.text', getMachineLearningRule().name);
    cy.get(RISK_SCORE).should('have.text', getMachineLearningRule().riskScore);
    cy.get(SEVERITY).should('have.text', getMachineLearningRule().severity);
    cy.get(RULE_SWITCH).should('have.attr', 'aria-checked', 'true');

    goToRuleDetails();

    cy.get(RULE_NAME_HEADER).should('contain', `${getMachineLearningRule().name}`);
    cy.get(ABOUT_RULE_DESCRIPTION).should('have.text', getMachineLearningRule().description);
    cy.get(ABOUT_DETAILS).within(() => {
      getDetails(SEVERITY_DETAILS).should('have.text', getMachineLearningRule().severity);
      getDetails(RISK_SCORE_DETAILS).should('have.text', getMachineLearningRule().riskScore);
      getDetails(REFERENCE_URLS_DETAILS).should((details) => {
        expect(removeExternalLinkText(details.text())).equal(expectedUrls);
      });
      getDetails(FALSE_POSITIVES_DETAILS).should('have.text', expectedFalsePositives);
      getDetails(MITRE_ATTACK_DETAILS).should((mitre) => {
        expect(removeExternalLinkText(mitre.text())).equal(expectedMitre);
      });
      getDetails(TAGS_DETAILS).should('have.text', expectedTags);
    });
    cy.get(DEFINITION_DETAILS).within(() => {
      getDetails(ANOMALY_SCORE_DETAILS).should(
        'have.text',
        getMachineLearningRule().anomalyScoreThreshold
      );
      getDetails(RULE_TYPE_DETAILS).should('have.text', 'Machine Learning');
      getDetails(TIMELINE_TEMPLATE_DETAILS).should('have.text', 'None');
      // With the #1912 ML rule improvement changes we enable jobs on rule creation.
      // Though, in cypress jobs enabling does not work reliably and job can be started or stopped.
      // Thus, we disable next check till we fix the issue with enabling jobs in cypress.
      // Relevant ticket: https://github.com/elastic/security-team/issues/5389
      // cy.get(MACHINE_LEARNING_JOB_STATUS).should('have.text', 'StoppedStopped');
      cy.get(MACHINE_LEARNING_JOB_ID).should(
        'have.text',
        getMachineLearningRule().machineLearningJobs.join('')
      );
    });
    cy.get(SCHEDULE_DETAILS).within(() => {
      getDetails(RUNS_EVERY_DETAILS).should(
        'have.text',
        `${getMachineLearningRule().runsEvery.interval}${getMachineLearningRule().runsEvery.type}`
      );
      getDetails(ADDITIONAL_LOOK_BACK_DETAILS).should(
        'have.text',
        `${getMachineLearningRule().lookBack.interval}${getMachineLearningRule().lookBack.type}`
      );
    });
  });
});
