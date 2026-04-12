import { useEffect } from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';

import { articles } from '../lib/articles';

export function Blog() {
  useEffect(() => {
    const activeHash = window.location.hash;
    if (activeHash.startsWith('#blog-')) {
      const slug = activeHash.replace('#blog-', '');
      const target = document.getElementById(slug);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  return (
    <section id="blog" className="min-h-screen py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mb-10">
          <a
            href="#conteudo"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Conteudo
          </a>
        </div>

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Blog <span className="text-gradient">D.Menezes Privacy</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Leia os artigos completos sobre LGPD, governanca de dados e prevencao de incidentes
            aplicados ao setor publico.
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              id={article.slug}
              className="glass-panel rounded-2xl p-8 md:p-10 border border-white/10"
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

              <h2 className="text-2xl md:text-3xl font-bold mb-6">{article.title}</h2>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                {article.content.map((paragraph, paragraphIndex) => (
                  <p key={`${article.slug}-p-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-4">Pontos-chave</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {article.highlights.map((highlight, highlightIndex) => (
                    <li key={`${article.slug}-h-${highlightIndex}`} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
