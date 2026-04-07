import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, UserX, FileWarning } from 'lucide-react';

const problems = [
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Baixa Maturidade",
    description: "Órgãos públicos frequentemente operam com baixo nível de maturidade em proteção de dados, expondo informações sensíveis.",
    color: "text-red-400",
    bg: "bg-red-400/10"
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Risco de Sanções",
    description: "Responsabilização de gestores e multas devido ao descumprimento das normativas da ANPD e Ministério Público.",
    color: "text-orange-400",
    bg: "bg-orange-400/10"
  },
  {
    icon: <UserX className="w-6 h-6" />,
    title: "Falta de Capacitação",
    description: "Servidores sem o treinamento adequado para lidar com dados pessoais no dia a dia da administração pública.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10"
  },
  {
    icon: <FileWarning className="w-6 h-6" />,
    title: "Processos Desestruturados",
    description: "Ausência de fluxos claros para atendimento a titulares, gestão de incidentes e compartilhamento de dados.",
    color: "text-rose-400",
    bg: "bg-rose-400/10"
  }
];

export function Problems() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Os Desafios da Privacidade na <span className="text-gradient">Administração Pública</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A adequação à LGPD não é apenas uma obrigação legal, mas uma necessidade para garantir a segurança institucional e a confiança do cidadão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl hover:bg-white/[0.02] transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${problem.bg} ${problem.color}`}>
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
