import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-background text-gray-100">
      <Navbar />
      <main className="px-6 pt-28 pb-16 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <p className="text-sm uppercase tracking-wide text-gray-400 mb-3">D.MenezesPrivacy</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Termos de Uso</h1>
            <p className="text-gray-300">
              Estes Termos de Uso regulam o acesso e a utilização dos serviços, canais de comunicação, conteúdos,
              materiais e ambientes digitais disponibilizados pelo D.MenezesPrivacy.
            </p>
            <p className="text-sm text-gray-500 mt-3">Última atualização: 12/04/2026</p>
          </header>

          <section className="space-y-8 leading-relaxed text-gray-200">
            <article>
              <h2 className="text-xl font-bold mb-3">1. Aceitação</h2>
              <p>
                Ao acessar ou utilizar os serviços do D.MenezesPrivacy, o usuário declara que leu, compreendeu e
                concorda com estes Termos e com a Política de Privacidade aplicável.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">2. Escopo dos Serviços</h2>
              <p className="mb-3">Os serviços podem incluir, entre outros:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Consultoria em privacidade, proteção de dados e governança.</li>
                <li>Diagnóstico de conformidade e apoio na adequação à LGPD.</li>
                <li>Apoio em políticas, procedimentos e resposta a incidentes.</li>
                <li>Disponibilização de materiais, painéis e áreas restritas de acompanhamento.</li>
              </ul>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">3. Responsabilidades do Usuário</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Fornecer informações verdadeiras, atualizadas e completas.</li>
                <li>Utilizar os serviços de forma ética, lícita e em conformidade com a legislação.</li>
                <li>Manter sigilo sobre credenciais de acesso a áreas restritas.</li>
                <li>Não praticar atos que comprometam a segurança, integridade e disponibilidade dos sistemas.</li>
              </ul>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">4. Propriedade Intelectual</h2>
              <p>
                Conteúdos, textos, materiais técnicos, estrutura dos ambientes e demais elementos disponibilizados pelo
                D.MenezesPrivacy são protegidos por direitos de propriedade intelectual, sendo vedada reprodução,
                distribuição ou exploração não autorizada.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">5. Limitação de Responsabilidade</h2>
              <p>
                O D.MenezesPrivacy envida esforços para manter seus serviços disponíveis e seguros, porém não garante
                ausência de indisponibilidades, falhas temporárias ou eventos de terceiros fora de seu controle. A
                responsabilidade será apurada nos limites legais e contratuais aplicáveis.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">6. Privacidade e Proteção de Dados</h2>
              <p>
                O tratamento de dados pessoais relacionado ao uso dos serviços observará a LGPD e as regras descritas
                na Política de Privacidade do D.MenezesPrivacy.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">7. Alterações dos Termos</h2>
              <p>
                Estes Termos podem ser atualizados a qualquer tempo para refletir melhorias operacionais, ajustes
                regulatórios e evolução dos serviços. A versão vigente será a publicada nesta página.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">8. Lei Aplicável e Foro</h2>
              <p>
                Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da Comarca do Rio de Janeiro,
                RJ, para dirimir eventuais controvérsias, ressalvadas as hipóteses de competência legal específica.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">9. Contato</h2>
              <p>Para dúvidas, solicitações ou comunicações relacionadas a estes Termos:</p>
              <p className="mt-2 text-gray-300">E-mail: davison.menezes@gmail.com</p>
              <p className="text-gray-300">WhatsApp: +55 (21) 98112-5585</p>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
