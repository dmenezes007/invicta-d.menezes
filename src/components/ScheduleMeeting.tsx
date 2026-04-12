import { FormEvent, useMemo, useState } from 'react';
import { CalendarDays, Clock3, Mail, User } from 'lucide-react';

type ScheduleFormData = {
  nome: string;
  email: string;
  orgao: string;
  data: string;
  horario: string;
  pauta: string;
};

const initialFormData: ScheduleFormData = {
  nome: '',
  email: '',
  orgao: '',
  data: '',
  horario: '',
  pauta: '',
};

const oneHourSlots = [
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
];

export function ScheduleMeeting() {
  const [formData, setFormData] = useState<ScheduleFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Agendamento de reunião - ${formData.nome}`);
    const body = encodeURIComponent(
      [
        'Oi, D. Menezes!',
        '',
        'Solicito o agendamento de uma reunião com os dados abaixo:',
        `Nome: ${formData.nome}`,
        `E-mail: ${formData.email}`,
        `Órgão/Empresa: ${formData.orgao}`,
        `Data: ${formData.data}`,
        `Horário (1h): ${formData.horario}`,
        `Pauta: ${formData.pauta}`,
      ].join('\n'),
    );

    window.location.href = `mailto:davison.menezes@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="agendamento" className="min-h-screen py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-primary/20 blur-[170px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Agende uma reunião de <span className="text-gradient">1 hora</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Selecione data e horário, preencha seus dados e enviaremos automaticamente sua solicitação para o e-mail de atendimento.
          </p>
        </div>

        <div className="glass-panel rounded-3xl border border-primary/20 p-8 md:p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2 text-sm text-gray-300">
                <span className="inline-flex items-center gap-2"><User className="w-4 h-4" /> Nome completo</span>
                <input
                  required
                  type="text"
                  value={formData.nome}
                  onChange={(event) => setFormData((previous) => ({ ...previous, nome: event.target.value }))}
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white"
                  placeholder="Seu nome"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-gray-300">
                <span className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> E-mail</span>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData((previous) => ({ ...previous, email: event.target.value }))}
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white"
                  placeholder="seu@email.com"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm text-gray-300">
              <span>Órgão/Empresa</span>
              <input
                required
                type="text"
                value={formData.orgao}
                onChange={(event) => setFormData((previous) => ({ ...previous, orgao: event.target.value }))}
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white"
                placeholder="Informe o órgão ou empresa"
              />
            </label>

            <div className="grid md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2 text-sm text-gray-300">
                <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" /> Data</span>
                <input
                  required
                  type="date"
                  min={today}
                  value={formData.data}
                  onChange={(event) => setFormData((previous) => ({ ...previous, data: event.target.value }))}
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-gray-300">
                <span className="inline-flex items-center gap-2"><Clock3 className="w-4 h-4" /> Horário (1h)</span>
                <select
                  required
                  value={formData.horario}
                  onChange={(event) => setFormData((previous) => ({ ...previous, horario: event.target.value }))}
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white"
                >
                  <option value="" className="bg-surface">Selecione um horário</option>
                  {oneHourSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-surface">
                      {slot}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm text-gray-300">
              <span>Pauta da reunião</span>
              <textarea
                required
                value={formData.pauta}
                onChange={(event) => setFormData((previous) => ({ ...previous, pauta: event.target.value }))}
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white min-h-28"
                placeholder="Descreva brevemente o objetivo da reunião"
              />
            </label>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all"
              >
                Enviar solicitação por e-mail
              </button>
              <a
                href="#topo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
              >
                Voltar para a página principal
              </a>
            </div>

            {submitted && (
              <p className="text-sm text-accent">
                Seu cliente de e-mail foi acionado com a mensagem pronta para envio.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
