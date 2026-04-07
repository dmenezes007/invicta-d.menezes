import { motion } from 'motion/react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { Shield, TrendingUp, Users, Activity } from 'lucide-react';

const data = [
  { name: 'M1', compliance: 20, risk: 90 },
  { name: 'M2', compliance: 35, risk: 75 },
  { name: 'M3', compliance: 50, risk: 60 },
  { name: 'M4', compliance: 65, risk: 45 },
  { name: 'M5', compliance: 80, risk: 25 },
  { name: 'M6', compliance: 95, risk: 10 },
];

export function DashboardImpact() {
  return (
    <section id="impacto" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Impacto Mensurável em <span className="text-gradient">Tempo Real</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Transformamos a adequação à LGPD em indicadores claros de gestão, permitindo o acompanhamento da evolução institucional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-panel p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-semibold">Evolução da Conformidade vs Risco</h3>
                <p className="text-sm text-gray-400">Projeção típica em 6 meses de projeto</p>
              </div>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-gray-300">Conformidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-gray-300">Risco</span>
                </div>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCompliance" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#374151" fontSize={12} tickMargin={10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: '8px' }}
                    itemStyle={{ color: '#e5e7eb' }}
                  />
                  <Area type="monotone" dataKey="compliance" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorCompliance)" />
                  <Area type="monotone" dataKey="risk" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorRisk)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* KPIs */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-4"
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Nível de Maturidade</p>
                <p className="text-3xl font-bold">Avançado</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-4"
            >
              <div className="p-4 rounded-xl bg-accent/10 text-accent border border-accent/20">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Redução de Riscos</p>
                <p className="text-3xl font-bold">85%</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-4"
            >
              <div className="p-4 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Servidores Capacitados</p>
                <p className="text-3xl font-bold">100%</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
