# Invicta D. Menezes — Landing Page Institucional

Aplicação React + Vite preparada para versionamento no GitHub e publicação na Vercel. O projeto apresenta uma landing page moderna para consultoria em privacidade e adequação à LGPD no setor público.

## ✅ Stack

- `React 19`
- `Vite 6`
- `TypeScript`
- `Tailwind CSS 4`
- `Recharts` para os painéis visuais

## 🚀 Executar localmente

**Pré-requisitos:** Node.js `20+`

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## 📦 Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente local |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Visualiza o build localmente |
| `npm run lint` | Valida o TypeScript sem emitir arquivos |
| `npm run clean` | Remove a pasta de build |

## ▲ Deploy na Vercel

1. Importar o repositório `dmenezes007/invicta-d.menezes` na Vercel.
2. Confirmar o preset `Vite`.
3. Usar:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Publicar.

O arquivo `vercel.json` já foi preparado para esse fluxo.

## 🔐 Variáveis de ambiente

No estado atual, a landing page **não depende de variáveis de ambiente obrigatórias** para funcionar em produção.

## 📁 Estrutura principal

```text
src/
  components/
  lib/
index.html
vite.config.ts
vercel.json
```

## 🔗 Repositório

- GitHub: `https://github.com/dmenezes007/invicta-d.menezes.git`
