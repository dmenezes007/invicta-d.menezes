import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Lock, Database } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Consultoria Especializada LGPD</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Privacidade e Proteção de Dados no <span className="text-gradient">Setor Público</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
              Consultoria especializada para adequação à LGPD com foco em eficiência institucional, segurança da informação e confiança pública.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                Solicitar Diagnóstico
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
              >
                Conhecer Soluções
              </a>
            </div>
          </motion.div>

          {/* Visual Dashboard Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="glass-panel p-6 rounded-2xl w-full max-w-lg relative z-10 shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-500 font-mono">nexus_compliance_v2.0</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/20 text-primary">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Índice de Conformidade</p>
                      <p className="text-2xl font-bold">87.4%</p>
                    </div>
                  </div>
                  <div className="text-accent text-sm font-medium flex items-center gap-1">
                    +12.5% <ArrowRight className="w-3 h-3 -rotate-45" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <Lock className="w-5 h-5 text-secondary mb-2" />
                    <p className="text-xs text-gray-400">Riscos Mitigados</p>
                    <p className="text-xl font-bold">142</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <Database className="w-5 h-5 text-accent mb-2" />
                    <p className="text-xs text-gray-400">Bases Mapeadas</p>
                    <p className="text-xl font-bold">56</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-300">Progresso de Adequação</p>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements behind dashboard */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/30 blur-[50px] rounded-full" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/30 blur-[60px] rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
