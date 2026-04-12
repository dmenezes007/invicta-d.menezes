import { Suspense, lazy, useEffect, useState } from 'react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Solutions } from './components/Solutions';
import { Methodology } from './components/Methodology';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ScheduleMeeting } from './components/ScheduleMeeting';
import { Blog } from './components/Blog';

const DashboardImpact = lazy(() =>
  import('./components/DashboardImpact').then((module) => ({
    default: module.DashboardImpact,
  })),
);

const SocialProof = lazy(() =>
  import('./components/SocialProof').then((module) => ({
    default: module.SocialProof,
  })),
);

const Education = lazy(() =>
  import('./components/Education').then((module) => ({
    default: module.Education,
  })),
);

function SectionFallback({ id }: { id: string }) {
  return (
    <section id={id} className="py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="glass-panel h-40 animate-pulse rounded-2xl border border-white/5" />
      </div>
    </section>
  );
}

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isSchedulePage = currentHash === '#agendamento';
  const isBlogPage = currentHash.startsWith('#blog');

  return (
    <div id="topo" className="min-h-screen bg-background text-gray-100 selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        {isSchedulePage ? (
          <ScheduleMeeting />
        ) : isBlogPage ? (
          <Blog />
        ) : (
          <>
            <Hero />
            <Problems />
            <Solutions />
            <Suspense fallback={<SectionFallback id="impacto" />}>
              <DashboardImpact />
            </Suspense>
            <Methodology />
            <Suspense fallback={<SectionFallback id="prova-social" />}>
              <SocialProof />
            </Suspense>
            <Suspense fallback={<SectionFallback id="conteudo" />}>
              <Education />
            </Suspense>
            <CTA />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

