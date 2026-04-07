import { motion } from 'motion/react';
import { Building2, Users, FileCheck } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <p className="text-gray-400">Órgãos Atendidos</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2">10k+</h3>
            <p className="text-gray-400">Servidores Capacitados</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4">
              <FileCheck className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2">100%</h3>
            <p className="text-gray-400">Projetos Entregues</p>
          </motion.div>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 text-primary/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
              "A consultoria transformou nossa visão sobre proteção de dados. O que antes parecia um obstáculo burocrático, hoje é um pilar da nossa governança institucional, trazendo mais segurança para o cidadão e eficiência para nossos processos."
            </p>
            <div>
              <p className="font-bold text-lg">Diretor de Tecnologia e Inovação</p>
              <p className="text-primary text-sm">Autarquia Federal Fictícia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
