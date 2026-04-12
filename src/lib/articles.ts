export type Article = {
  category: string;
  title: string;
  slug: string;
  description: string;
  readTime: string;
  content: string[];
  highlights: string[];
};

export const articles: Article[] = [
  {
    category: 'Guia',
    title: 'O que é a LGPD no Setor Público?',
    slug: 'lgpd-setor-publico',
    description:
      'Entenda as principais diferenças na aplicação da lei para órgãos governamentais e autarquias.',
    readTime: '5 min',
    content: [
      'A LGPD no setor público exige equilíbrio entre interesse público, transparência e proteção da privacidade dos cidadãos. Diferentemente do setor privado, muitos tratamentos de dados são baseados em obrigação legal e execução de políticas públicas.',
      'Na prática, isso significa mapear bases legais por processo, restringir acesso a dados sensíveis e justificar cada compartilhamento entre órgãos. A responsabilidade não está apenas na tecnologia: envolve jurídico, gestão e governança.',
      'A adequação começa com inventário de dados, classificação de riscos e definição de controles mínimos para cada área. Com esse diagnóstico, o órgão consegue priorizar ações de maior impacto e reduzir exposição a incidentes.',
    ],
    highlights: [
      'Base legal alinhada ao processo público',
      'Transparência com minimização de dados',
      'Plano contínuo de adequação institucional',
    ],
  },
  {
    category: 'Boas Práticas',
    title: 'Governança de Dados na Prática',
    slug: 'governanca-de-dados',
    description:
      'Como estruturar um comitê de privacidade eficiente sem engessar a administração pública.',
    readTime: '8 min',
    content: [
      'Uma boa governança de dados define papéis claros para decisões sobre coleta, uso, retenção e descarte de informações. O comitê de privacidade deve ter representação de tecnologia, jurídico, ouvidoria e áreas finalísticas.',
      'Com fluxos simples de aprovação e métricas objetivas, a governança deixa de ser burocracia e passa a apoiar decisões rápidas. Indicadores como tempo de resposta a titulares, incidentes evitados e bases revisadas ajudam a medir evolução.',
      'O segredo está na rotina: reuniões curtas, decisões registradas, plano trimestral e revisão dos riscos críticos. Esse modelo fortalece conformidade sem interromper os serviços ao cidadão.',
    ],
    highlights: [
      'Papéis e responsabilidades formalizados',
      'Indicadores para monitorar conformidade',
      'Ritmo operacional sem travar a gestão',
    ],
  },
  {
    category: 'Segurança',
    title: 'Prevenção de Incidentes',
    slug: 'prevencao-de-incidentes',
    description:
      'Passo a passo para mitigar riscos de vazamento de dados em sistemas legados do governo.',
    readTime: '6 min',
    content: [
      'Prevenção de incidentes começa por identificar ativos críticos e vulnerabilidades recorrentes em sistemas legados. Sem esse mapa, as equipes atuam apenas de forma reativa e os riscos se repetem.',
      'Adoção de controles básicos gera ganho imediato: autenticação forte, revisão de permissões, criptografia em trânsito, registros de auditoria e trilhas de acesso por perfil. Em paralelo, treinamentos periódicos reduzem falhas humanas.',
      'Todo órgão precisa de um plano de resposta com responsáveis, prazos e modelo de comunicação. Quando um incidente ocorre, a rapidez na contenção e na notificação protege o cidadão e reduz impactos institucionais.',
    ],
    highlights: [
      'Mapeamento de ativos e vulnerabilidades',
      'Controles técnicos e administrativos combinados',
      'Resposta estruturada e comunicação tempestiva',
    ],
  },
];
