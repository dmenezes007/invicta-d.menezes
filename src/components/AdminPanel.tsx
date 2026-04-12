import { FormEvent, useState } from 'react';
import { Lock, ExternalLink } from 'lucide-react';
import { Navbar } from './Navbar';

const ADMIN_PASSWORD = 'DMP';

const CLIENT_LINKS = [
  { slug: 'caw', name: 'Corbo, Aguiar & Waise Advogados Associados' },
  { slug: 'cm-mc-ba', name: 'Câmara Municipal de Morro do Chapéu - BA' },
  { slug: 'cm-rj-ba', name: 'Câmara Municipal de Riachão do Jacuípe - BA' },
  { slug: 'cm-ib-ba', name: 'Câmara Municipal de Ibirapitanga - BA' },
];

export function AdminPanel() {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.trim() === ADMIN_PASSWORD) {
      setIsUnlocked(true);
      setHasError(false);
      return;
    }

    setHasError(true);
  };

  return (
    <div className="min-h-screen bg-background text-gray-100">
      <Navbar />
      <div className="px-6 py-10 pt-28 md:pt-32 md:py-16">
        <div className="max-w-3xl mx-auto glass-panel rounded-2xl border border-white/10 p-8 md:p-10">
          {!isUnlocked ? (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/20 p-2 rounded-lg border border-primary/30">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <h1 className="text-2xl font-bold">Painel de Administrador</h1>
              </div>

              <p className="text-gray-400 mb-8">Digite a senha de administrador para gerenciar os acessos internos dos clientes.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block text-sm font-medium text-gray-300" htmlFor="admin-password">
                  Senha
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-xl bg-surface border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60"
                  placeholder="Digite a senha"
                  required
                />

                {hasError && (
                  <div className="rounded-xl border border-[#ED2938]/50 bg-[#ED2938]/10 px-4 py-3 text-sm text-[#ff9ba4]">
                    Senha incorreta. Tente novamente.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-3 transition-colors"
                >
                  Entrar
                </button>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Painel de Administrador</h1>
              <p className="text-gray-400 mb-8">Acesse rapidamente as áreas internas de cada cliente.</p>

              <div className="grid gap-3 md:grid-cols-2">
                {CLIENT_LINKS.map((client) => (
                  <a
                    key={client.slug}
                    href={`/${client.slug}`}
                    className="rounded-xl border border-white/15 bg-surface-light/70 px-4 py-4 hover:border-primary/50 transition-colors"
                  >
                    <p className="font-semibold text-gray-100 leading-tight mb-1">{client.name}</p>
                    <p className="text-sm text-[#8ddcff] inline-flex items-center gap-2">
                      Acessar página interna
                      <ExternalLink className="w-4 h-4" />
                    </p>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
