export enum PhaseKey {
  Prep = 'prep',
  Pilot = 'pilot',
  Eval = 'eval',
  Expand = 'expand',
}

export enum CriterionKey {
  Connect = 'connect',
  Access = 'access',
  Risk = 'risk',
  Capacity = 'capacity',
  Finance = 'finance',
}

export interface ChallengeItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface MechanismStep {
  code: string;
  title: string;
  description: string;
}

export interface ImplementationPhase {
  key: PhaseKey;
  tabId: string;
  tabRange: string;
  tabLabel: string;
  period: string;
  title: string;
  items: string[];
  caption: string;
}

export interface EvaluationCriterion {
  key: CriterionKey;
  buttonTitle: string;
  buttonSubtitle: string;
  panelTitle: string;
  panelDescription: string;
}

export interface IndicatorItem {
  title: string;
  indicatorsText: string;
}

export interface GovernanceRole {
  title: string;
  description: string;
}

export interface SourceDocument {
  organization: string;
  title: string;
  description: string;
  url: string;
  linkLabel: string;
}
