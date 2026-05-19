import { useState } from 'react';
import { Building, Users } from 'lucide-react';
import { Navbar } from './Navbar';

export function ClientsPage() {
  const [selectedSector, setSelectedSector] = useState<'public' | 'private' | null>(null);

  if (selectedSector === null) {
    return (
      <div className="min-h-screen bg-background text-gray-100">
        <Navbar />
        <div className="px-6 py-10 pt-28 md:pt-32 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Clientes</h1>
            <p className="text-gray-400 text-center mb-12">Selecione o tipo de cliente para acessar a área interna</p>

            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => setSelectedSector('public')}
                className="group glass-panel rounded-2xl border border-white/10 p-8 hover:border-primary/50 transition-all hover:bg-surface-light/70"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-lg border border-primary/30 group-hover:bg-primary/30 transition-colors">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Setor Público</h2>
                </div>
                <p className="text-gray-400">Câmaras municipais e órgãos públicos</p>
              </button>

              <button
                onClick={() => setSelectedSector('private')}
                className="group glass-panel rounded-2xl border border-white/10 p-8 hover:border-primary/50 transition-all hover:bg-surface-light/70"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-lg border border-primary/30 group-hover:bg-primary/30 transition-colors">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Iniciativa Privada</h2>
                </div>
                <p className="text-gray-400">Empresas e organizações privadas</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedSector === 'public') {
    return <PublicSectorClientsPage onBack={() => setSelectedSector(null)} />;
  }

  return <PrivateSectorClientsPage onBack={() => setSelectedSector(null)} />;
}

interface SectorPageProps {
  onBack: () => void;
}

function PublicSectorClientsPage({ onBack }: SectorPageProps) {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === 'DMPSP') {
      setIsUnlocked(true);
      setHasError(false);
      return;
    }
    setHasError(true);
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-background text-gray-100">
        <Navbar />
        <div className="px-6 py-10 pt-28 md:pt-32 md:py-16">
          <div className="max-w-md mx-auto glass-panel rounded-2xl border border-white/10 p-8 md:p-10">
            <button
              onClick={onBack}
              className="text-primary hover:text-primary/80 text-sm mb-6 transition-colors"
            >
              ← Voltar
            </button>

            <h1 className="text-2xl font-bold mb-2">Setor Público</h1>
            <p className="text-gray-400 mb-8">Digite a senha para acessar</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          </div>
        </div>
      </div>
    );
  }

  return <PublicSectorContent onBack={onBack} />;
}

function PrivateSectorClientsPage({ onBack }: SectorPageProps) {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === 'DMPIP') {
      setIsUnlocked(true);
      setHasError(false);
      return;
    }
    setHasError(true);
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-background text-gray-100">
        <Navbar />
        <div className="px-6 py-10 pt-28 md:pt-32 md:py-16">
          <div className="max-w-md mx-auto glass-panel rounded-2xl border border-white/10 p-8 md:p-10">
            <button
              onClick={onBack}
              className="text-primary hover:text-primary/80 text-sm mb-6 transition-colors"
            >
              ← Voltar
            </button>

            <h1 className="text-2xl font-bold mb-2">Iniciativa Privada</h1>
            <p className="text-gray-400 mb-8">Digite a senha para acessar</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          </div>
        </div>
      </div>
    );
  }

  return <PrivateSectorContent onBack={onBack} />;
}

interface ContentProps {
  onBack: () => void;
}

function PublicSectorContent({ onBack }: ContentProps) {
  const clients = [
    {
      name: 'Câmara Municipal de Morro do Chapéu',
      state: 'BA',
      portalUrl: 'https://www.camaramorrodochapeu.ba.gov.br/portal/index.php/portal/transparencia',
      contactPerson: 'Flávia Oliveira de Souza',
      contactPhone: '(73) 9910-5860',
      dpo: 'Flávia Oliveira de Souza',
      dpoPhone: '(74) 9910-5860',
      stages: [
        'ETAPA 0 - Definição de Papéis: Incompleta',
        'ETAPA 1 - Mapeamento e Base de Evidências: Em Andamento',
        'ETAPA 2 - Governança Institucional: Em Andamento',
        'ETAPA 3 - Transparência por Processo de Negócio: Não Iniciada',
        'ETAPA 4 - Segurança da Informação: Não Iniciada',
        'ETAPA 5 - Resposta e Melhoria Contínua: Não Iniciada',
      ],
    },
    {
      name: 'Câmara Municipal de Riachão do Jacuípe',
      state: 'BA',
      portalUrl: 'https://transparencia.camaraderiachaodojacuipe.ba.gov.br/homepage',
      contactPerson: 'Roberto',
      contactPhone: '(75) 8172-2107',
      dpo: 'Eliziane Carneiro de Santana',
      dpoPhone: 'Não conhecido',
      stages: [
        'ETAPA 0 - Definição de Papéis: Incompleta',
        'ETAPA 1 - Mapeamento e Base de Evidências: Em Andamento',
        'ETAPA 2 - Governança Institucional: Em Andamento',
        'ETAPA 3 - Transparência por Processo de Negócio: Não Iniciada',
        'ETAPA 4 - Segurança da Informação: Não Iniciada',
        'ETAPA 5 - Resposta e Melhoria Contínua: Não Iniciada',
      ],
    },
    {
      name: 'Câmara Municipal de Ibirapitanga',
      state: 'BA',
      portalUrl:
        'https://www.airdoc.com.br/PORTALMUNICIPIO/ba/cmibirapitanga/home?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnqPK9zYQxZ7y0YqDOqXLi6eWNFDHjcknWUzkCthKJtnlZiibOufTJmErhSFE_aem_iVF9tNH1HIx_D075h7jizg',
      contactPerson: 'Maiane Santos',
      contactPhone: '(73) 8133-1100',
      dpo: 'Maiane Santos',
      dpoPhone: '(73) 8133-1100',
      stages: [
        'ETAPA 0 - Definição de Papéis: Incompleta',
        'ETAPA 1 - Mapeamento e Base de Evidências: Não Iniciada',
        'ETAPA 2 - Governança Institucional: Não Iniciada',
        'ETAPA 3 - Transparência por Processo de Negócio: Não Iniciada',
        'ETAPA 4 - Segurança da Informação: Não Iniciada',
        'ETAPA 5 - Resposta e Melhoria Contínua: Não Iniciada',
      ],
    },
    {
      name: 'Câmara Municipal de Maraú',
      state: 'BA',
      portalUrl: 'https://cmmarau-ba.portaltp.com.br/',
      contactPerson: 'Jucy',
      contactPhone: '(73) 9849-5744',
      dpo: 'Não conhecido',
      dpoPhone: 'Não conhecido',
      stages: [
        'ETAPA 0 - Definição de Papéis: Não Iniciada',
        'ETAPA 1 - Mapeamento e Base de Evidências: Não Iniciada',
        'ETAPA 2 - Governança Institucional: Não Iniciada',
        'ETAPA 3 - Transparência por Processo de Negócio: Não Iniciada',
        'ETAPA 4 - Segurança da Informação: Não Iniciada',
        'ETAPA 5 - Resposta e Melhoria Contínua: Não Iniciada',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-gray-100">
      <Navbar />
      <div className="px-6 py-10 pt-28 md:pt-32 md:py-16">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="text-primary hover:text-primary/80 text-sm mb-8 transition-colors inline-flex items-center gap-2"
          >
            ← Voltar para Clientes
          </button>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">Setor Público</h1>
          <p className="text-gray-400 mb-12">Câmaras Municipais e Órgãos Públicos</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="glass-panel rounded-2xl border border-white/10 p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-bold text-lg mb-4 text-white leading-snug">{client.name}</h3>

                <div className="space-y-4">
                  <div>
                    <a
                      href={client.portalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-primary uppercase tracking-wide hover:text-[#8ddcff] transition-colors"
                    >
                      PORTAL
                    </a>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                      Ponto Focal
                    </p>
                    <p className="text-sm text-gray-300">{client.contactPerson}</p>
                    <p className="text-sm text-[#8ddcff]">{client.contactPhone}</p>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                      Encarregado (DPO)
                    </p>
                    <p className="text-sm text-gray-300">{client.dpo}</p>
                    <p className="text-sm text-[#8ddcff]">{client.dpoPhone}</p>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <div className="space-y-2">
                      {client.stages.map((stage, index) => {
                        const [, stageNumber, stageDescription, stageStatus] =
                          stage.match(/^ETAPA\s+(\d+)\s*-\s*(.+):\s*(.+)$/) ?? [];

                        return (
                          <div
                            key={stage}
                            className={
                              index < client.stages.length - 1
                                ? 'border-b border-white/10 pb-2'
                                : ''
                            }
                          >
                            <p className="text-xs font-semibold text-primary tracking-wide">ETAPA {stageNumber}</p>
                            <p className="text-xs text-white leading-relaxed">{stageDescription}</p>
                            <p className="text-xs text-[#8ddcff] leading-relaxed">{stageStatus}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PrivateSectorContent({ onBack }: ContentProps) {
  return (
    <div className="min-h-screen bg-background text-gray-100">
      <Navbar />
      <div className="px-6 py-10 pt-28 md:pt-32 md:py-16">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="text-primary hover:text-primary/80 text-sm mb-8 transition-colors inline-flex items-center gap-2"
          >
            ← Voltar para Clientes
          </button>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">Iniciativa Privada</h1>
          <p className="text-gray-400 mb-12">Empresas e Organizações Privadas</p>

          <div className="glass-panel rounded-2xl border border-white/10 p-8 text-center">
            <p className="text-gray-400">Conteúdo em desenvolvimento</p>
          </div>
        </div>
      </div>
    </div>
  );
}
