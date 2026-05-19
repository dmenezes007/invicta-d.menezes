import { useState } from 'react';
import { Building, Landmark, Shield } from 'lucide-react';
import { Navbar } from './Navbar';

type ClientKey = 'inpi' | 'invicta' | 'caw';

interface NavigationProps {
  onBack: () => void;
}

interface ProtectedClientPageProps extends NavigationProps {
  title: string;
  password: string;
  children: React.ReactNode;
}

function ProtectedClientPage({ title, password, onBack, children }: ProtectedClientPageProps) {
  const [inputPassword, setInputPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword.trim() === password) {
      setIsUnlocked(true);
      setHasError(false);
      return;
    }
    setHasError(true);
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background text-gray-100">
      <Navbar />
      <div className="px-6 py-10 pt-28 md:pt-32 md:py-16">
        <div className="max-w-md mx-auto glass-panel rounded-2xl border border-white/10 p-8 md:p-10">
          <button
            onClick={onBack}
            className="text-primary hover:text-primary/80 text-sm mb-6 transition-colors cursor-pointer"
          >
            ← Voltar
          </button>

          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-gray-400 mb-8">Digite a senha para acessar</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
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
              className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-3 transition-colors cursor-pointer"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function ClientsPage() {
  const [selectedClient, setSelectedClient] = useState<ClientKey | null>(null);

  if (selectedClient === null) {
    return (
      <div className="min-h-screen bg-background text-gray-100">
        <Navbar />
        <div className="px-6 py-10 pt-28 md:pt-32 md:py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Clientes</h1>
            <p className="text-gray-400 text-center mb-12">Selecione o cliente para acessar a área interna</p>

            <div className="grid md:grid-cols-3 gap-6">
              <button
                onClick={() => setSelectedClient('inpi')}
                className="group glass-panel rounded-2xl border border-white/10 p-8 hover:border-primary/50 transition-all hover:bg-surface-light/70 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-lg border border-primary/30 group-hover:bg-primary/30 transition-colors">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">INPI</h2>
                </div>
                <p className="text-gray-400">Área Interna INPI</p>
              </button>

              <button
                onClick={() => setSelectedClient('invicta')}
                className="group glass-panel rounded-2xl border border-white/10 p-8 hover:border-primary/50 transition-all hover:bg-surface-light/70 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-lg border border-primary/30 group-hover:bg-primary/30 transition-colors">
                    <Landmark className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">INVICTA</h2>
                </div>
                <p className="text-gray-400">Área Interna INVICTA</p>
              </button>

              <button
                onClick={() => setSelectedClient('caw')}
                className="group glass-panel rounded-2xl border border-white/10 p-8 hover:border-primary/50 transition-all hover:bg-surface-light/70 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-lg border border-primary/30 group-hover:bg-primary/30 transition-colors">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">CAW</h2>
                </div>
                <p className="text-gray-400">Área Interna CAW</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedClient === 'invicta') {
    return (
      <ProtectedClientPage
        title="INVICTA"
        password="DMP-INVICTA"
        onBack={() => setSelectedClient(null)}
      >
        <InvictaContent onBack={() => setSelectedClient(null)} />
      </ProtectedClientPage>
    );
  }

  if (selectedClient === 'inpi') {
    return (
      <ProtectedClientPage
        title="INPI"
        password="DMP-INPI-101"
        onBack={() => setSelectedClient(null)}
      >
        <PlaceholderContent title="INPI" onBack={() => setSelectedClient(null)} />
      </ProtectedClientPage>
    );
  }

  return (
    <ProtectedClientPage
      title="CAW"
      password="DMP-CAW-303"
      onBack={() => setSelectedClient(null)}
    >
      <PlaceholderContent title="CAW" onBack={() => setSelectedClient(null)} />
    </ProtectedClientPage>
  );
}

function InvictaContent({ onBack }: NavigationProps) {
  const clients = [
    {
      name: 'Câmara Municipal de Morro do Chapéu',
      portalUrl: 'https://www.camaramorrodochapeu.ba.gov.br/portal/index.php/portal/transparencia',
      contactPerson: 'Flávia Oliveira de Souza',
      contactPhone: '(73) 9910-5860',
      dpo: 'Flávia Oliveira de Souza',
      dpoPhone: '(74) 9910-5860',
      stages: [
        'ETAPA 0 - Definição de Papéis: Incompleta',
        'ETAPA 1 - Mapeamento e Base de Evidências: Em Andamento',
        'ETAPA 2 - Governança Institucional: Em Andamento',
        'ETAPA 3 - Transparência por Processo: Não Iniciada',
        'ETAPA 4 - Segurança da Informação: Não Iniciada',
        'ETAPA 5 - Resposta e Melhoria Contínua: Não Iniciada',
      ],
    },
    {
      name: 'Câmara Municipal de Riachão do Jacuípe',
      portalUrl: 'https://transparencia.camaraderiachaodojacuipe.ba.gov.br/homepage',
      contactPerson: 'Roberto',
      contactPhone: '(75) 8172-2107',
      dpo: 'Eliziane Carneiro de Santana',
      dpoPhone: 'Não conhecido',
      stages: [
        'ETAPA 0 - Definição de Papéis: Incompleta',
        'ETAPA 1 - Mapeamento e Base de Evidências: Em Andamento',
        'ETAPA 2 - Governança Institucional: Em Andamento',
        'ETAPA 3 - Transparência por Processo: Não Iniciada',
        'ETAPA 4 - Segurança da Informação: Não Iniciada',
        'ETAPA 5 - Resposta e Melhoria Contínua: Não Iniciada',
      ],
    },
    {
      name: 'Câmara Municipal de Ibirapitanga',
      portalUrl:
        'https://www.airdoc.com.br/PORTALMUNICIPIO/ba/cmibirapitanga/home?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnqPK9zYQxZ7y0YqDOqXLi6eWNFDHjcknWUzkCthKJtnlZiibOufTJmErhSFE_aem_iVF9tNH1HIx_D075h7jizg',
      contactPerson: 'Mayane dos Santos Silva',
      contactPhone: '(73) 8133-1100',
      dpo: 'Mayane dos Santos Silva',
      dpoPhone: '(73) 8133-1100',
      stages: [
        'ETAPA 0 - Definição de Papéis: Incompleta',
        'ETAPA 1 - Mapeamento e Base de Evidências: Não Iniciada',
        'ETAPA 2 - Governança Institucional: Não Iniciada',
        'ETAPA 3 - Transparência por Processo: Não Iniciada',
        'ETAPA 4 - Segurança da Informação: Não Iniciada',
        'ETAPA 5 - Resposta e Melhoria Contínua: Não Iniciada',
      ],
    },
    {
      name: 'Câmara Municipal de Maraú',
      portalUrl: 'https://cmmarau-ba.portaltp.com.br/',
      contactPerson: 'Jucy',
      contactPhone: '(73) 9849-5744',
      dpo: 'Não conhecido',
      dpoPhone: 'Não conhecido',
      stages: [
        'ETAPA 0 - Definição de Papéis: Não Iniciada',
        'ETAPA 1 - Mapeamento e Base de Evidências: Não Iniciada',
        'ETAPA 2 - Governança Institucional: Não Iniciada',
        'ETAPA 3 - Transparência por Processo: Não Iniciada',
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
            className="text-primary hover:text-primary/80 text-sm mb-8 transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            ← Voltar para Clientes
          </button>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">INVICTA</h1>
          <div className="mb-12 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-gray-400">Órgãos Públicos Municipais</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              ÚLTIMA ATUALIZAÇÃO: <span className="text-primary">18/05/2026</span>
            </p>
          </div>

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
                      className="text-xs font-semibold text-primary uppercase tracking-wide hover:text-[#8ddcff] transition-colors cursor-pointer"
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
                        const normalizedStageStatus = stageStatus?.toLowerCase() ?? '';
                        const stageStyle =
                          normalizedStageStatus === 'não iniciada'
                            ? 'bg-surface-light/60 border border-[#ff4d6d]/80 shadow-[0_0_18px_rgba(255,0,51,0.75)]'
                            : normalizedStageStatus === 'incompleta'
                              ? 'bg-surface-light/60 border border-[#ffa14d]/80 shadow-[0_0_18px_rgba(255,122,0,0.75)]'
                              : normalizedStageStatus === 'em andamento'
                                ? 'bg-surface-light/60 border border-[#fff066]/90 shadow-[0_0_18px_rgba(255,230,0,0.75)]'
                                : normalizedStageStatus === 'concluída'
                                  ? 'bg-surface-light/60 border border-[#66ff99]/90 shadow-[0_0_18px_rgba(0,255,102,0.75)]'
                                  : 'bg-surface-light/60 border border-white/30 shadow-[0_0_12px_rgba(255,255,255,0.35)]';
                        const stageAccentClass =
                          normalizedStageStatus === 'não iniciada'
                            ? 'bg-[#ff0033]'
                            : normalizedStageStatus === 'incompleta'
                              ? 'bg-[#ff7a00]'
                              : normalizedStageStatus === 'em andamento'
                                ? 'bg-[#ffe600]'
                                : normalizedStageStatus === 'concluída'
                                  ? 'bg-[#00ff66]'
                                  : 'bg-white/80';

                        return (
                          <div
                            key={stage}
                            className={`${stageStyle} relative overflow-hidden rounded-lg px-3 py-2 ${
                              index < client.stages.length - 1 ? 'border-b border-white/10' : ''
                            }`}
                          >
                            <span
                              aria-hidden="true"
                              className={`${stageAccentClass} absolute left-1 top-1 bottom-1 w-1 rounded-full`}
                            />
                            <p className="pl-3 text-xs font-bold tracking-wide text-primary">ETAPA {stageNumber}</p>
                            <p className="pl-3 text-xs leading-relaxed font-medium text-white">{stageDescription}</p>
                            <p className="pl-3 text-xs leading-relaxed font-semibold text-[#8ddcff]">{stageStatus}</p>
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

function PlaceholderContent({ onBack }: NavigationProps & { title: string }) {
  return (
    <div className="min-h-screen bg-background text-gray-100">
      <Navbar />
      <div className="px-6 py-10 pt-28 md:pt-32 md:py-16">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="text-primary hover:text-primary/80 text-sm mb-8 transition-colors inline-flex items-center gap-2 cursor-pointer"
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
