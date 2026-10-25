import {
  ChallengeItem,
  CriterionKey,
  EvaluationCriterion,
  GovernanceRole,
  ImplementationPhase,
  IndicatorItem,
  MechanismStep,
  PhaseKey,
  SourceDocument,
} from '../types';

export const CHALLENGES: ChallengeItem[] = [
  {
    icon: '↗',
    title: 'Brechas de conectividad',
    description:
      'Comunidades e instituciones pueden carecer de cobertura, calidad, continuidad o acceso asequible para aprovechar herramientas de IA.',
    tag: 'Medir localmente',
  },
  {
    icon: '⌘',
    title: 'Desigualdad de capacidades',
    description:
      'Difieren la formación técnica, los recursos de cómputo, la investigación y la capacidad institucional para adoptar y evaluar sistemas.',
    tag: 'Línea base necesaria',
  },
  {
    icon: '◎',
    title: 'Riesgos algorítmicos',
    description:
      'Sesgos, daños, datos insuficientes y falta de mecanismos de revisión pueden afectar a personas y comunidades.',
    tag: 'Evaluar según contexto',
  },
  {
    icon: '⇄',
    title: 'Dependencia tecnológica',
    description:
      'Concentración, baja interoperabilidad y costes de migración pueden limitar adaptación y capacidad de negociación.',
    tag: 'Hipótesis a medir',
  },
];

export const MECHANISM_STEPS: MechanismStep[] = [
  {
    code: '01 · CONECTAR',
    title: 'Infraestructura adecuada',
    description: 'Elegir opciones según territorio, coste, energía y mantenimiento.',
  },
  {
    code: '02 · ACERCAR',
    title: 'Acceso comunitario',
    description: 'Servicios, formación y acompañamiento contextual.',
  },
  {
    code: '03 · EVALUAR',
    title: 'Riesgo proporcional',
    description: 'Revisar sistemas según finalidad, contexto y daño posible.',
  },
  {
    code: '04 · FORTALECER',
    title: 'Capacidad local',
    description: 'Formar equipos, interoperar y adaptar donde sea viable.',
  },
  {
    code: '05 · SOSTENER',
    title: 'Financiación equitativa',
    description: 'Asignar según necesidades, capacidad y evidencia.',
  },
];

export const IMPLEMENTATION_PHASES: ImplementationPhase[] = [
  {
    key: PhaseKey.Prep,
    tabId: 'tab-prep',
    tabRange: 'MESES 1—3',
    tabLabel: 'Preparación',
    period: 'Fase 1 · Meses 1 a 3',
    title: 'Preparación',
    items: [
      'Identificar necesidades y brechas de conectividad.',
      'Definir criterios de selección del piloto.',
      'Establecer metodología y reglas de cofinanciación.',
      'Identificar instituciones mediante acuerdos voluntarios.',
      'Definir líneas base e indicadores antes de metas.',
    ],
    caption:
      'Escenario ilustrativo sujeto a aprobación y ajuste. Criterios y reglas de suspensión deben definirse antes del piloto.',
  },
  {
    key: PhaseKey.Pilot,
    tabId: 'tab-pilot',
    tabRange: 'MESES 4—15',
    tabLabel: 'Piloto · 12 meses',
    period: 'Fase 2 · Meses 4 a 15 · 12 meses',
    title: 'Piloto',
    items: [
      'Implementar proyectos seleccionados.',
      'Poner en marcha o fortalecer centros comunitarios.',
      'Desplegar conectividad adaptada y formar equipos.',
      'Auditar sistemas pertinentes según sus riesgos.',
      'Registrar costes, dificultades y resultados.',
    ],
    caption:
      'El piloto dura 12 meses en este escenario. No se presuponen comunidades, entidades participantes ni resultados.',
  },
  {
    key: PhaseKey.Eval,
    tabId: 'tab-eval',
    tabRange: 'MESES 16—18',
    tabLabel: 'Evaluación independiente',
    period: 'Fase 3 · Meses 16 a 18',
    title: 'Evaluación independiente',
    items: [
      'Comparar resultados con la línea base.',
      'Evaluar cobertura, uso, costes, capacidades y sostenibilidad.',
      'Revisar auditorías y ejecución financiera.',
      'Identificar efectos adversos, deficiencias y mejoras.',
      'Publicar un informe de evaluación.',
    ],
    caption:
      'La evaluación debe ser independiente, con metodología acordada y protección de datos.',
  },
  {
    key: PhaseKey.Expand,
    tabId: 'tab-expand',
    tabRange: 'MESES 19—24',
    tabLabel: 'Decisión y expansión',
    period: 'Fase 4 · Meses 19 a 24',
    title: 'Decisión y expansión condicionada',
    items: [
      'Determinar si se cumplen criterios previos.',
      'Corregir deficiencias antes de ampliar.',
      'Ajustar financiación y metodologías.',
      'Ampliar solo componentes con evidencia y viabilidad.',
      'Decidir continuidad, modificación o cierre.',
    ],
    caption:
      'La expansión no es automática; depende de evidencia y decisión institucional.',
  },
];

export const EVALUATION_CRITERIA: EvaluationCriterion[] = [
  {
    key: CriterionKey.Connect,
    buttonTitle: 'Conectividad útil',
    buttonSubtitle: 'Cobertura, calidad, continuidad y coste',
    panelTitle: 'Conectividad útil',
    panelDescription:
      'Revisar cobertura y calidad del servicio, disponibilidad, continuidad, coste y uso efectivo frente a una línea base local y condiciones territoriales.',
  },
  {
    key: CriterionKey.Access,
    buttonTitle: 'Acceso comunitario',
    buttonSubtitle: 'Operación, competencias y participación',
    panelTitle: 'Acceso comunitario',
    panelDescription:
      'Observar centros operativos, competencias demostradas, participación de grupos insuficientemente atendidos y continuidad tras la capacitación.',
  },
  {
    key: CriterionKey.Risk,
    buttonTitle: 'Equidad y seguridad',
    buttonSubtitle: 'Evaluación, incidentes, corrección',
    panelTitle: 'Equidad y seguridad algorítmica',
    panelDescription:
      'Registrar sistemas evaluados, revisiones independientes, disparidades investigadas, correcciones y respuesta ante incidencias.',
  },
  {
    key: CriterionKey.Capacity,
    buttonTitle: 'Capacidad tecnológica',
    buttonSubtitle: 'Personal, interoperabilidad, opciones',
    panelTitle: 'Capacidad y autonomía tecnológica',
    panelDescription:
      'Documentar personal formado, mantenimiento y adaptación local, interoperabilidad y alternativas técnicamente viables.',
  },
  {
    key: CriterionKey.Finance,
    buttonTitle: 'Financiación sostenible',
    buttonSubtitle: 'Hitos, gastos, mantenimiento',
    panelTitle: 'Financiación y sostenibilidad',
    panelDescription:
      'Contrastar recursos ejecutados, hitos, costes, verificación independiente y viabilidad del mantenimiento.',
  },
];

export const INDICATORS: IndicatorItem[] = [
  {
    title: 'Conectividad',
    indicatorsText: 'cobertura, calidad, disponibilidad, coste y uso',
  },
  {
    title: 'Acceso comunitario',
    indicatorsText: 'centros operativos, competencias, participación y continuidad',
  },
  {
    title: 'Equidad y seguridad',
    indicatorsText: 'sistemas evaluados, correcciones e incidentes',
  },
  {
    title: 'Capacidad y autonomía',
    indicatorsText: 'personal formado, interoperabilidad, alternativas',
  },
  {
    title: 'Financiación sostenible',
    indicatorsText: 'ejecución, hitos, costes y mantenimiento',
  },
];

export const GOVERNANCE_ROLES: GovernanceRole[] = [
  {
    title: 'Estados participantes',
    description:
      'Definir prioridades y participación voluntaria; acordar reglas; respetar soberanía y marcos aplicables.',
  },
  {
    title: 'Coordinación regional',
    description:
      'Instancia por definir mediante acuerdo para coordinar proyectos, información y cooperación.',
  },
  {
    title: 'Instituciones técnicas',
    description:
      'Universidades, investigación y capacitación: apoyo técnico, formación e intercambio de conocimiento.',
  },
  {
    title: 'Comunidades y socios',
    description:
      'Participación comunitaria y funciones de evaluación independiente, apoyo técnico o financiero según reglas acordadas.',
  },
];

export const GOVERNANCE_CHIPS: string[] = [
  'Transparencia',
  'Participación',
  'Soberanía estatal',
  'Protección de datos',
  'Rendición de cuentas',
  'Conflictos de interés',
  'Cooperación Sur-Sur',
];

export const SOURCE_DOCUMENTS: SourceDocument[] = [
  {
    organization: 'UNCTAD · CSTD',
    title: 'About the Commission on Science and Technology for Development',
    description:
      'Mandato y espacio de diálogo sobre ciencia, tecnología y desarrollo. No implica afiliación.',
    url: 'https://unctad.org/topic/commission-on-science-technology-for-development/about',
    linkLabel: 'Fuente oficial ↗',
  },
  {
    organization: 'UNCTAD · 2025',
    title: 'Technology and Innovation Report 2025: Inclusive Artificial Intelligence for Development',
    description: 'Oportunidades, capacidades y riesgos de IA inclusiva para el desarrollo.',
    url: 'https://unctad.org/publication/technology-and-innovation-report-2025',
    linkLabel: 'Consultar informe ↗',
  },
  {
    organization: 'UNCTAD · 2024',
    title: 'Digital Economy Report 2024: Shaping an environmentally sustainable and inclusive digital future',
    description: 'Impactos ambientales y políticas digitales inclusivas y sostenibles.',
    url: 'https://unctad.org/publication/digital-economy-report-2024',
    linkLabel: 'Consultar informe ↗',
  },
  {
    organization: 'UNESCO · 2021',
    title: 'Recommendation on the Ethics of Artificial Intelligence',
    description: 'Marco sobre derechos, transparencia, equidad y supervisión humana.',
    url: 'https://www.unesco.org/en/legal-affairs/recommendation-ethics-artificial-intelligence',
    linkLabel: 'Leer recomendación ↗',
  },
  {
    organization: 'UIT · 2024',
    title: 'Measuring digital development: Facts and Figures 2024',
    description:
      'Indicadores y brechas en uso, infraestructura, asequibilidad y conectividad.',
    url: 'https://www.itu.int/hub/publication/d-ind-ict_mdd-2024-4/',
    linkLabel: 'Consultar publicación ↗',
  },
  {
    organization: 'NIST · 2023',
    title: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0)',
    description: 'Referencia voluntaria para gestionar riesgos durante el ciclo de vida de IA.',
    url: 'https://www.nist.gov/itl/ai-risk-management-framework',
    linkLabel: 'Marco y estado ↗',
  },
];
