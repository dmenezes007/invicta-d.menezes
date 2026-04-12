import { motion } from 'motion/react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { articles } from '../lib/articles';

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
          <a href="#blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium">
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
                <a href={`#blog-${article.slug}`} className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Ler artigo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
