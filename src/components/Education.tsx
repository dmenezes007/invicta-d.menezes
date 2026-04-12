import { motion } from 'motion/react';
import { BookOpen, ArrowRight } from 'lucide-react';

const articles = [
  {
    category: 'Guia',
    title: 'O que é a LGPD no Setor Público?',
    slug: 'lgpd-setor-publico',
    description: 'Entenda as principais diferenças na aplicação da lei para órgãos governamentais e autarquias.',
    readTime: '5 min',
    content: [
      'A LGPD no setor público exige equilíbrio entre interesse público, transparência e proteção da privacidade dos cidadãos. Diferentemente do setor privado, muitos tratamentos de dados são baseados em obrigação legal e execução de políticas públicas.',
      'Na prática, isso significa mapear bases legais por processo, restringir acesso a dados sensíveis e justificar cada compartilhamento entre órgãos. A responsabilidade não está apenas na tecnologia: envolve jurídico, gestão e governança.',
      'A adequação começa com inventário de dados, classificação de riscos e definição de controles mínimos para cada área. Com esse diagnóstico, o órgão consegue priorizar ações de maior impacto e reduzir exposição a incidentes.'
    ],
    highlights: [
      'Base legal alinhada ao processo público',
      'Transparência com minimização de dados',
      'Plano contínuo de adequação institucional'
    ]
  },
  {
    category: 'Boas Práticas',
    title: 'Governança de Dados na Prática',
    slug: 'governanca-de-dados',
    description: 'Como estruturar um comitê de privacidade eficiente sem engessar a administração pública.',
    readTime: '8 min',
    content: [
      'Uma boa governança de dados define papéis claros para decisões sobre coleta, uso, retenção e descarte de informações. O comitê de privacidade deve ter representação de tecnologia, jurídico, ouvidoria e áreas finalísticas.',
      'Com fluxos simples de aprovação e métricas objetivas, a governança deixa de ser burocracia e passa a apoiar decisões rápidas. Indicadores como tempo de resposta a titulares, incidentes evitados e bases revisadas ajudam a medir evolução.',
      'O segredo está na rotina: reuniões curtas, decisões registradas, plano trimestral e revisão dos riscos críticos. Esse modelo fortalece conformidade sem interromper os serviços ao cidadão.'
    ],
    highlights: [
      'Papéis e responsabilidades formalizados',
      'Indicadores para monitorar conformidade',
      'Ritmo operacional sem travar a gestão'
    ]
  },
  {
    category: 'Segurança',
    title: 'Prevenção de Incidentes',
    slug: 'prevencao-de-incidentes',
    description: 'Passo a passo para mitigar riscos de vazamento de dados em sistemas legados do governo.',
    readTime: '6 min',
    content: [
      'Prevenção de incidentes começa por identificar ativos críticos e vulnerabilidades recorrentes em sistemas legados. Sem esse mapa, as equipes atuam apenas de forma reativa e os riscos se repetem.',
      'Adoção de controles básicos gera ganho imediato: autenticação forte, revisão de permissões, criptografia em trânsito, registros de auditoria e trilhas de acesso por perfil. Em paralelo, treinamentos periódicos reduzem falhas humanas.',
      'Todo órgão precisa de um plano de resposta com responsáveis, prazos e modelo de comunicação. Quando um incidente ocorre, a rapidez na contenção e na notificação protege o cidadão e reduz impactos institucionais.'
    ],
    highlights: [
      'Mapeamento de ativos e vulnerabilidades',
      'Controles técnicos e administrativos combinados',
      'Resposta estruturada e comunicação tempestiva'
    ]
  }
];

export function Education() {
  return (
    <section id="conteudo" className="py-24 relative bg-surface-light border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Conhecimento e <span className="text-gradient">Capacitação</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Acesse nossos materiais educativos e mantenha sua equipe atualizada sobre as melhores práticas de privacidade.
            </p>
          </div>
          <a href="#artigos-completos" className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium">
            Ver todos os artigos <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-panel p-6 rounded-2xl h-full hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <BookOpen className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {article.description}
                </p>
                <a href={`#${article.slug}`} className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Ler artigo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div id="artigos-completos" className="mt-16 space-y-8">
          {articles.map((article, index) => (
            <article
              key={article.slug}
              id={article.slug}
              className="glass-panel rounded-2xl p-8 border border-white/10"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300">
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                  <BookOpen className="w-3 h-3" />
                  Leitura de {article.readTime}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-6">{article.title}</h3>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                {article.content.map((paragraph, paragraphIndex) => (
                  <p key={`${article.slug}-p-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="text-sm uppercase tracking-wide text-gray-400 mb-4">Pontos-chave</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {article.highlights.map((highlight, highlightIndex) => (
                    <li key={`${article.slug}-h-${highlightIndex}`} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {index < articles.length - 1 && <div className="mt-8 border-b border-white/5" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
