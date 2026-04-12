export type ClientSlug = 'caw' | 'cm-mc-ba' | 'cm-rj-ba' | 'cm-ib-ba';

export type ClientConfig = {
  slug: ClientSlug;
  name: string;
  password: string;
};

type StageDefinition = {
  id: number;
  title: string;
  subtitle: string;
  documents: Array<{
    key: string;
    title: string;
    matchers: string[];
  }>;
};

export type ClientFile = {
  fileName: string;
  downloadUrl: string;
  status: 'elaborated' | 'published';
};

export type DocumentStatus = {
  key: string;
  title: string;
  available: boolean;
  status: 'planned' | 'elaborated' | 'published';
  files: ClientFile[];
};

export type StageStatus = {
  id: number;
  title: string;
  subtitle: string;
  documents: DocumentStatus[];
};

export const CLIENTS: Record<ClientSlug, ClientConfig> = {
  'caw': {
    slug: 'caw',
    name: 'Corbo, Aguiar & Waise Advogados Associados',
    password: 'caw',
  },
  'cm-mc-ba': {
    slug: 'cm-mc-ba',
    name: 'Câmara Municipal de Morro do Chapéu - BA',
    password: 'cm-mc-ba',
  },
  'cm-rj-ba': {
    slug: 'cm-rj-ba',
    name: 'Câmara Municipal de Riachão do Jacuípe - BA',
    password: 'cm-rj-ba',
  },
  'cm-ib-ba': {
    slug: 'cm-ib-ba',
    name: 'Câmara Municipal de Ibirapitanga - BA',
    password: 'cm-ib-ba',
  },
};

const STAGES: StageDefinition[] = [
  {
    id: 0,
    title: 'Etapa 0',
    subtitle: 'Definição de Papéis',
    documents: [
      {
        key: 'encarregado',
        title: 'Indicação do Encarregado',
        matchers: ['encarregado'],
      },
      {
        key: 'processo-gestao-dados',
        title: 'Processo Estruturado de Gestão de Dados',
        matchers: ['processo estruturado', 'gestao', 'dados'],
      },
    ],
  },
  {
    id: 1,
    title: 'Etapa 1',
    subtitle: 'Mapeamento e Base de Evidências',
    documents: [
      {
        key: 'idp',
        title: 'Inventário de Dados Pessoais (IDP)',
        matchers: ['idp'],
      },
      {
        key: 'ripd',
        title: 'Relatório de Impacto à Proteção de Dados Pessoais (RIPD)',
        matchers: ['ripd'],
      },
    ],
  },
  {
    id: 2,
    title: 'Etapa 2',
    subtitle: 'Governança Institucional',
    documents: [
      {
        key: 'pgp',
        title: 'Programa de Governança em Privacidade (PGP)',
        matchers: ['pgp'],
      },
      {
        key: 'ppdp',
        title: 'Política de Proteção de Dados Pessoais (PPDP)',
        matchers: ['ppdp'],
      },
      {
        key: 'desenvolvimento-pessoas',
        title: 'Política de Desenvolvimento de Pessoas',
        matchers: ['desenvolvimento', 'pessoas'],
      },
    ],
  },
  {
    id: 3,
    title: 'Etapa 3',
    subtitle: 'Transparência por Processo de Negócio',
    documents: [
      {
        key: 'politica-privacidade',
        title: 'Política de Privacidade',
        matchers: ['politica de privacidade'],
      },
      {
        key: 'termos-uso',
        title: 'Termos de Uso',
        matchers: ['termos de uso'],
      },
    ],
  },
  {
    id: 4,
    title: 'Etapa 4',
    subtitle: 'Segurança da Informação',
    documents: [
      {
        key: 'posin',
        title: 'Política de Segurança da Informação (POSIN)',
        matchers: ['posin'],
      },
      {
        key: 'backup',
        title: 'Política de Backup',
        matchers: ['backup'],
      },
      {
        key: 'gestao-ativos',
        title: 'Política de Gestão de Ativos',
        matchers: ['gestao', 'ativos'],
      },
      {
        key: 'malware',
        title: 'Política de Defesas contra Malware',
        matchers: ['malware'],
      },
      {
        key: 'provedores',
        title: 'Política de Gestão de Provedores',
        matchers: ['gestao', 'provedores'],
      },
      {
        key: 'vulnerabilidades',
        title: 'Política de Gerenciamento de Vulnerabilidades',
        matchers: ['gerenciamento', 'vulnerabilidades'],
      },
      {
        key: 'registros',
        title: 'Política de Gestão de Registros',
        matchers: ['gestao', 'registros'],
      },
    ],
  },
  {
    id: 5,
    title: 'Etapa 5',
    subtitle: 'Resposta e Melhoria Contínua',
    documents: [
      {
        key: 'pri',
        title: 'Plano de Resposta a Incidentes (PRI)',
        matchers: ['plano de resposta', 'incidentes'],
      },
      {
        key: 'relatorio-incidente',
        title: 'Relatório de Tratamento de Incidente',
        matchers: ['relatorio', 'tratamento', 'incidente'],
      },
    ],
  },
];

const CLIENT_FILES: Record<ClientSlug, string[]> = {
  'caw': [
    'Designação do Encarregado pelo Tratamento de Dados Pessoais.docx',
    'Inventário de Dados Pessoais (IDP).xlsx',
    'Plano de Resposta a Incidentes (PRI).docx',
    'Política de Backup.docx',
    'Política de Defesas contra Malware.docx',
    'Política de Desenvolvimento de Pessoas.docx',
    'Política de Gerenciamento de Vulnerabilidades.docx',
    'Política de Gestão de Ativos.docx',
    'Política de Gestão de Provedores.docx',
    'Política de Gestão de Registros.docx',
    'Política de Privacidade (PRO-001 - Saúde Suplementar).docx',
    'Política de Privacidade (PRO-002 - Cível e Consumidor).docx',
    'Política de Privacidade (PRO-003 - Trabalhista).docx',
    'Política de Privacidade (PRO-004 - Consultivo e Due Diligence).docx',
    'Política de Proteção de Dados Pessoais (PPDP).docx',
    'Política de Segurança da Informação (POSIN).docx',
    'Processo Estruturado de Gestão de Dados.docx',
    'Programa de Governança em Privacidade (PGP).docx',
    'Relatório de Impacto à Proteção de Dados Pessoais (RIPD).docx',
    'Relatório de Tratamento de Incidente.docx',
    'Termos de Uso (PRO-001 - Saúde Suplementar).docx',
    'Termos de Uso (PRO-002 - Cível e Consumidor).docx',
    'Termos de Uso (PRO-003 - Trabalhista).docx',
    'Termos de Uso (PRO-004 - Consultivo e Due Diligence).docx',
  ],
  'cm-mc-ba': [
    'Encarregado_Camara_Municipal_Morro_do_Chapeu_BA.docx',
    'IDP_Camara_Municipal_Morro_do_Chapeu_BA.xlsx',
    'PGP_Camara_Municipal_Morro_do_Chapeu_BA.docx',
    'PPDP_Camara_Municipal_Morro_do_Chapeu_BA.docx',
    'RIPD_Camara_Municipal_Morro_do_Chapeu_BA.docx',
  ],
  'cm-rj-ba': [
    'Encarregado_Camara_Municipal_Riachao_do_Jacuipe_BA.docx',
    'IDP_Camara_Municipal_Riachao_do_Jacuipe_BA.xlsx',
    'PGP_Camara_Municipal_Riachao_do_Jacuipe_BA.docx',
    'PPDP_Camara_Municipal_Riachao_do_Jacuipe_BA.docx',
    'RIPD_Camara_Municipal_Riachao_do_Jacuipe_BA.docx',
  ],
  'cm-ib-ba': [
    'Encarregado_Ibirapitanga_BA.docx',
  ],
};

function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function toDownloadUrl(clientSlug: ClientSlug, fileName: string): string {
  return `/clients/${clientSlug}/${encodeURIComponent(fileName)}`;
}

function getFileStatus(fileName: string): 'elaborated' | 'published' | null {
  const normalized = normalizeText(fileName);

  if (normalized.endsWith('.pdf')) {
    return 'published';
  }

  if (normalized.endsWith('.docx') || normalized.endsWith('.xlsx')) {
    return 'elaborated';
  }

  return null;
}

export function getClientStages(clientSlug: ClientSlug): StageStatus[] {
  const clientFiles = CLIENT_FILES[clientSlug];

  return STAGES.map((stage) => ({
    id: stage.id,
    title: stage.title,
    subtitle: stage.subtitle,
    documents: stage.documents.map((document) => {
      const files = clientFiles
        .filter((fileName) => {
          const normalized = normalizeText(fileName);
          return document.matchers.every((matcher) => normalized.includes(normalizeText(matcher)));
        })
        .map((fileName) => {
          const status = getFileStatus(fileName);

          if (!status) {
            return null;
          }

          return {
            fileName,
            downloadUrl: toDownloadUrl(clientSlug, fileName),
            status,
          };
        })
        .filter((file): file is ClientFile => file !== null);

      const status = files.some((file) => file.status === 'published')
        ? 'published'
        : files.some((file) => file.status === 'elaborated')
          ? 'elaborated'
          : 'planned';

      return {
        key: document.key,
        title: document.title,
        available: files.length > 0,
        status,
        files,
      };
    }),
  }));
}

export function getClientProgress(clientSlug: ClientSlug): number {
  const stages = getClientStages(clientSlug);
  const documentProgressUnits = stages.flatMap((stage) =>
    stage.documents.map((document) => {
      switch (document.status) {
        case 'published':
          return 1;
        case 'elaborated':
          return 0.5;
        default:
          return 0;
      }
    }),
  );

  const totalDocuments = documentProgressUnits.length;
  const completedUnits = documentProgressUnits.reduce((sum, current) => sum + current, 0);

  if (totalDocuments === 0) {
    return 0;
  }

  return Math.round((completedUnits / totalDocuments) * 100);
}
