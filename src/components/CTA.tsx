import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function CTA() {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-12 md:p-16 rounded-3xl border border-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
        >
          <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8">
            <ShieldCheck className="w-8 h-8" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prepare sua instituição para a LGPD com <span className="text-gradient">segurança e eficiência</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Fale com nossos especialistas e descubra como podemos ajudar seu órgão a alcançar a conformidade sem burocracia excessiva.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5521981125585?text=Oi%2C%20D.%20Menezes!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              Solicitar Consultoria
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#agendamento" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all">
              Agendar Reunião
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
