import { FormEvent, useMemo, useState } from 'react';
import { Lock, CircleCheck, CircleX, CircleAlert } from 'lucide-react';
import { CLIENTS, ClientSlug, getClientProgress, getClientStages } from '../lib/clientProgress';
import { Navbar } from './Navbar';

type ClientPortalProps = {
  clientSlug: ClientSlug;
};

type FocalPoint = {
  name: string;
  contact: string;
};

const PROGRESS_COLORS = [
  '#ED2938',
  '#FF8C01',
  '#FFAA1C',
  '#FFE733',
  '#006B3E',
  '#024E1B',
];

const STATUS_RED = '#ED2938';
const STATUS_YELLOW = '#FFAA1C';
const STATUS_GREEN = '#006B3E';

const FOCAL_POINTS: Record<ClientSlug, FocalPoint> = {
  'caw': {
    name: 'Mirian Ayres',
    contact: '(21) 3613-3800',
  },
  'cm-mc-ba': {
    name: 'Flávia Oliveira de Souza',
    contact: '(74) 9910-5860',
  },
  'cm-rj-ba': {
    name: 'Roberto',
    contact: '(75) 8172-2107',
  },
  'cm-ib-ba': {
    name: 'Maiane Santos',
    contact: '(73) 8133-1100',
  },
};

function getProgressPosition(progress: number): number {
  return Math.min(100, Math.max(0, progress));
}

function getIndicatorColor(progress: number): string {
  const normalized = Math.min(100, Math.max(0, progress)) / 100;
  const colorIndex = Math.min(PROGRESS_COLORS.length - 1, Math.floor(normalized * PROGRESS_COLORS.length));
  return PROGRESS_COLORS[colorIndex];
}

function getDocumentLabel(fileName: string, status: 'elaborated' | 'published', index: number, total: number): string {
  const baseLabel = status === 'published' ? 'Documento publicado' : 'Documento elaborado';

  if (total <= 1) {
    return baseLabel;
  }

  const match = fileName.match(/PRO-\d{3}/i);
  if (match) {
    return `${baseLabel} (${match[0].toUpperCase()})`;
  }

  const sequence = String(index + 1).padStart(3, '0');
  return `${baseLabel} (PRO-${sequence})`;
}

function getCardAccent(documentStatus: 'planned' | 'elaborated' | 'published'): string {
  switch (documentStatus) {
    case 'published':
      return STATUS_GREEN;
    case 'elaborated':
      return STATUS_YELLOW;
    default:
      return STATUS_RED;
  }
}

export function ClientPortal({ clientSlug }: ClientPortalProps) {
  const client = CLIENTS[clientSlug];
  const focalPoint = FOCAL_POINTS[clientSlug];
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const stages = useMemo(() => getClientStages(clientSlug), [clientSlug]);
  const progress = useMemo(() => getClientProgress(clientSlug), [clientSlug]);
  const progressPosition = getProgressPosition(progress);
  const indicatorColor = getIndicatorColor(progress);

  const gradient = `linear-gradient(180deg, ${PROGRESS_COLORS.join(', ')})`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.trim() === client.password) {
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
          <div className="max-w-lg mx-auto glass-panel rounded-2xl border border-white/10 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/20 p-2 rounded-lg border border-primary/30">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-2xl font-bold">Acesso Restrito</h1>
            </div>

            <p className="text-gray-300 mb-2 font-medium">{client.name}</p>
            <p className="text-gray-400 mb-8">Digite a senha para visualizar o progresso dos documentos oficiais.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="client-password">
                Senha
              </label>
              <input
                id="client-password"
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
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-gray-100">
      <Navbar />
      <div className="px-4 py-8 pt-28 md:pt-32 md:px-6 md:py-10">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 md:mb-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{client.name}</h1>
            <p className="text-gray-400">Painel de evolução dos documentos oficiais de conformidade.</p>
          </header>

          <div className="mb-6 md:mb-8 rounded-2xl border border-white/10 bg-surface/70 px-5 py-4 md:px-6 md:py-5">
            <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">Ponto Focal</p>
            <div className="grid gap-2 md:grid-cols-2">
              <p className="text-gray-200">
                <span className="font-semibold">Nome:</span> {focalPoint.name}
              </p>
              <p className="text-gray-200">
                <span className="font-semibold">Contato:</span> {focalPoint.contact}
              </p>
            </div>
          </div>

          <section className="glass-panel rounded-2xl border border-white/10 p-5 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 md:gap-8">
              <div className="relative min-h-[560px] hidden lg:flex items-start justify-center">
                <div className="relative h-full w-6 rounded-full bg-white/10 border border-white/10 overflow-visible">
                  <div className="absolute inset-0 rounded-full" style={{ background: gradient }} />
                  <div
                    className="absolute -left-20 -translate-y-1/2 flex items-center gap-3"
                    style={{ top: `${progressPosition}%` }}
                  >
                    <span className="orbitron-bold text-base leading-none" style={{ color: indicatorColor }}>
                      {progress}%
                    </span>
                    <span
                      className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[12px]"
                      style={{ borderLeftColor: indicatorColor }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-5 md:space-y-6">
                <div className="lg:hidden mb-2 flex items-center gap-3">
                  <div className="h-3 flex-1 rounded-full overflow-hidden" style={{ background: gradient }} />
                  <span className="orbitron-bold text-sm" style={{ color: indicatorColor }}>
                    {progress}%
                  </span>
                </div>

                {stages.map((stage) => (
                  <article key={stage.id} className="pb-5 border-b border-white/10 last:border-b-0 last:pb-0">
                    <h2 className="text-xl font-bold leading-tight">{stage.title}</h2>
                    <p className="text-gray-300 mb-4">{stage.subtitle}</p>

                    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                      {stage.documents.map((document) => (
                        <div
                          key={document.key}
                          className="rounded-xl border px-4 py-3 bg-surface-light/70"
                          style={{
                            borderColor:
                              document.status === 'planned'
                                ? 'rgba(255, 255, 255, 0.10)'
                                : `${getCardAccent(document.status)}55`,
                          }}
                        >
                          <div className="flex items-start gap-3">
                            {document.status === 'published' ? (
                              <CircleCheck className="w-5 h-5 mt-0.5 shrink-0" style={{ color: STATUS_GREEN }} />
                            ) : document.status === 'elaborated' ? (
                              <CircleAlert className="w-5 h-5 mt-0.5 shrink-0" style={{ color: STATUS_YELLOW }} />
                            ) : (
                              <CircleX className="w-5 h-5 mt-0.5 shrink-0" style={{ color: STATUS_RED }} />
                            )}
                            <div className="min-w-0 w-full">
                              <p className="font-semibold leading-tight text-gray-100">
                                {document.title}
                              </p>

                              {document.available ? (
                                <div className="mt-2 space-y-1.5">
                                  {document.files.map((file, index) => (
                                    (() => {
                                      const sameStatusFiles = document.files.filter((candidate) => candidate.status === file.status);
                                      const sameStatusIndex = sameStatusFiles.findIndex((candidate) => candidate.fileName === file.fileName);

                                      return (
                                        <a
                                          key={file.fileName}
                                          href={file.downloadUrl}
                                          download
                                          className="inline-flex items-center text-sm font-semibold transition-colors"
                                          style={{ color: file.status === 'published' ? STATUS_GREEN : STATUS_YELLOW }}
                                        >
                                          {getDocumentLabel(file.fileName, file.status, sameStatusIndex, sameStatusFiles.length)}
                                        </a>
                                      );
                                    })()
                                  ))}
                                </div>
                              ) : (
                                <p className="mt-2 text-sm" style={{ color: STATUS_RED }}>
                                  Documento previsto para elaboração
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
