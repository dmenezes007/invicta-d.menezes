import { motion } from 'motion/react';
import { Search, ShieldCheck, Database, Users, UserCheck, FileText, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Diagnóstico de Conformidade",
    description: "Avaliação completa do nível de maturidade atual da instituição em relação às exigências da LGPD.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Programa de Governança",
    description: "Estruturação de um programa contínuo de privacidade, com comitês, métricas e gestão de riscos.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Mapping",
    description: "Mapeamento detalhado do ciclo de vida dos dados pessoais, identificando bases legais e vulnerabilidades.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Capacitação de Servidores",
    description: "Treinamentos direcionados para criar uma cultura de privacidade e segurança da informação.",
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Apoio ao Encarregado (DPO)",
    description: "Suporte técnico e jurídico especializado para o DPO nomeado pela instituição pública.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Políticas e Normativos",
    description: "Elaboração e revisão de políticas de privacidade, termos de uso e normativas internas.",
  }
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-24 relative bg-surface-light border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Soluções Modulares para <span className="text-gradient">Conformidade</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Metodologia adaptada à realidade do setor público, garantindo adequação técnica e jurídica sem paralisar as operações.
            </p>
          </div>
          <a href="#contato" className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium">
            Ver todas as soluções <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass-panel p-8 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {solution.description}
                </p>
                
                <a href="#contato" className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 group-hover:text-primary transition-colors">
                  Saiba mais <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
