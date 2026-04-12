import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/20 p-2 rounded-lg border border-primary/30">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                D.Menezes<span className="text-primary">Privacy</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Consultoria especializada em privacidade e proteção de dados para o setor público, unindo tecnologia, direito e gestão.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Soluções</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#solucoes" className="hover:text-primary transition-colors">Diagnóstico LGPD</a></li>
              <li><a href="#metodologia" className="hover:text-primary transition-colors">Governança em Privacidade</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">DPO as a Service</a></li>
              <li><a href="#conteudo" className="hover:text-primary transition-colors">Treinamentos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Institucional</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#topo" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#metodologia" className="hover:text-primary transition-colors">Metodologia</a></li>
              <li><a href="#impacto" className="hover:text-primary transition-colors">Casos de Sucesso</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/admin" className="hover:text-primary transition-colors">Painel do Administrador</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="mailto:davison.menezes@gmail.com" className="hover:text-primary transition-colors">davison.menezes@gmail.com</a></li>
              <li><a href="https://wa.me/5521981125585?text=Oi%2C%20D.%20Menezes!" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">+55 (21) 98112-5585 - WhatsApp</a></li>
              <li>Rio de Janeiro, RJ - Brasil</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} D.Menezes Privacy. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="/admin" className="hover:text-white transition-colors">Painel do Administrador</a>
            <a href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
