import { motion } from 'motion/react';
import { Search, PenTool, Settings, Activity, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-5 h-5" />,
    title: "Diagnóstico",
    description: "Assessment inicial, mapeamento de dados (RoPA) e análise de gap."
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Planejamento",
    description: "Plano de ação detalhado, priorização de riscos e definição de governança."
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Implementação",
    description: "Adequação de contratos, criação de políticas e processos de atendimento."
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Monitoramento",
    description: "Treinamentos, auditorias internas e acompanhamento de indicadores."
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Melhoria Contínua",
    description: "Apoio contínuo ao DPO e atualização frente a novas normativas."
  }
];

export function Methodology() {
  return (
    <section id="metodologia" className="py-24 relative bg-surface-light border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Metodologia <span className="text-gradient">Comprovada</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Um processo estruturado em 5 etapas para garantir uma jornada de adequação segura, transparente e eficiente.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-panel p-6 rounded-2xl h-full relative z-10 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-mono text-primary mb-2">Fase 0{index + 1}</div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
