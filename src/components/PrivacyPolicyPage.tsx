import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-gray-100">
      <Navbar />
      <main className="px-6 pt-28 pb-16 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Política de Privacidade</h1>
            <p className="text-gray-300">
              Esta Política descreve como o D.MenezesPrivacy coleta, utiliza, compartilha e protege dados pessoais no
              contexto de seus serviços de consultoria em privacidade, proteção de dados e conformidade regulatória,
              em observância à Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
            </p>
            <p className="text-sm text-gray-500 mt-3">Última atualização: 12/04/2026</p>
          </header>

          <section className="space-y-8 leading-relaxed text-gray-200">
            <article>
              <h2 className="text-xl font-bold mb-3">1. Definições</h2>
              <p>
                Para os fins desta Política, adotam-se os conceitos da LGPD, incluindo, entre outros: dados pessoais,
                dados pessoais sensíveis, titular de dados, tratamento, controlador, operador, encarregado e
                anonimização.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">2. Dados Tratados</h2>
              <p className="mb-3">Podemos tratar as seguintes categorias de dados, conforme a natureza do serviço:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Dados cadastrais e de contato, como nome, e-mail, telefone e instituição.</li>
                <li>Dados profissionais e funcionais necessários à execução dos serviços contratados.</li>
                <li>Dados de navegação e interação em nossos canais digitais, quando aplicável.</li>
                <li>
                  Dados pessoais e dados sensíveis eventualmente envolvidos em projetos de diagnóstico, governança,
                  adequação e resposta a incidentes.
                </li>
              </ul>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">3. Finalidades do Tratamento</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Prestação dos serviços de consultoria e suporte técnico-jurídico.</li>
                <li>Gestão de relacionamento com clientes, parceiros e partes interessadas.</li>
                <li>Atendimento de solicitações, comunicações e agendamentos.</li>
                <li>Cumprimento de obrigações legais, regulatórias e contratuais.</li>
                <li>Prevenção de fraudes, incidentes e riscos de segurança da informação.</li>
              </ul>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">4. Bases Legais</h2>
              <p>
                O tratamento de dados ocorre com fundamento nas bases legais previstas na LGPD, conforme o caso
                concreto, incluindo execução de contrato e procedimentos preliminares, cumprimento de obrigação legal
                ou regulatória, exercício regular de direitos, legítimo interesse e consentimento, quando necessário.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">5. Compartilhamento de Dados</h2>
              <p>
                O compartilhamento é realizado apenas quando necessário para a execução das finalidades informadas,
                com parceiros, fornecedores, operadores e autoridades competentes, sempre sob critérios de necessidade,
                proporcionalidade e segurança.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">6. Armazenamento e Retenção</h2>
              <p>
                Os dados são armazenados em ambiente seguro e mantidos pelo período necessário ao cumprimento das
                finalidades do tratamento, às obrigações legais e à defesa de direitos, com descarte seguro quando
                aplicável.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">7. Direitos dos Titulares</h2>
              <p className="mb-3">Nos termos da LGPD, o titular pode solicitar, entre outros:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Confirmação da existência de tratamento e acesso aos dados.</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
                <li>Portabilidade, informação sobre compartilhamento e revisão de decisões automatizadas.</li>
                <li>Revogação de consentimento, quando essa for a base legal aplicável.</li>
              </ul>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">8. Segurança da Informação</h2>
              <p>
                Adotamos medidas técnicas e organizacionais para proteger os dados contra acessos não autorizados,
                perda, alteração, divulgação indevida e incidentes de segurança, incluindo controles administrativos,
                lógicos e processuais compatíveis com o risco e com a natureza dos dados tratados.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold mb-3">9. Contato</h2>
              <p>
                Para solicitações relacionadas a esta Política ou ao tratamento de dados pessoais, entre em contato:
              </p>
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
