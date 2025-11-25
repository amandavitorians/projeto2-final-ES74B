# Projeto 1 - Frontend React (SPA)

Este projeto foi desenvolvido para a disciplina **Programação Web Fullstack — Projeto 1**.

## 🚀 Tecnologias utilizadas
- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material UI (MUI)](https://mui.com/)
- [Axios](https://axios-http.com/)
- Context API + useReducer

## 📂 Estrutura de pastas
```
projeto1-frontend/
├─ index.html
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ api.js
│  ├─ contexts/
│  │  └─ AppContext.jsx
│  └─ components/
│     ├─ SearchForm.jsx
│     ├─ ResultList.jsx
│     ├─ ResultItem.jsx
│     └─ ErrorMessage.jsx
```

## ⚙️ Instalação e execução local
1. Clone o repositório ou extraia o `.zip`.
2. No diretório do projeto, instale as dependências:
   ```bash
   npm install
   ```
3. Execute em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
   O Vite abrirá a aplicação em `http://localhost:5173` (ou outra porta disponível).

4. Para gerar o build de produção:
   ```bash
   npm run build
   npm run preview
   ```

## 🌐 Deploy
Você pode fazer o deploy em qualquer serviço de hospedagem de SPAs, como:
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Surge](https://surge.sh/)
- GitHub Pages

### Deploy no Netlify (exemplo e link)
1. Crie uma conta em [Netlify](https://app.netlify.com/).
2. Clique em **Add new site → Deploy manually**.
3. Faça o build local com:
   ```bash
   npm run build
   ```
4. Arraste a pasta `dist/` gerada para a área de deploy no Netlify.


   A aplicação está disponível em:  
👉 [https://projeto1-frontend.netlify.app](https://projeto1-frontend.netlify.app)

### Deploy no Vercel (exemplo)
1. Instale a CLI do Vercel:
   ```bash
   npm install -g vercel
   ```
2. Execute:
   ```bash
   vercel
   ```
3. Confirme as opções, e o projeto será publicado automaticamente.

## ✅ Funcionalidades implementadas
- SPA em React com consumo de API JSON pública (**The Cat API**).
- Hook principal: **useReducer** (gerenciamento de estado global).
- Biblioteca externa: **Material UI (MUI)** para UI responsiva.
- Busca com envio de parâmetros (termo e limite de resultados).
- Validação de campos obrigatórios antes do envio.
- Mensagens de erro antes e depois da requisição.
- Comunicação entre componentes via Context API.
- Estrutura pronta para deploy.

---

## 👨‍🏫 Observação para o professor

Conforme solicitado no enunciado, a pasta **`codigo-fontes/`** contém apenas os diretórios **`src/components`** e **`src/contexts`**.  
Essa pasta foi preparada exclusivamente para a correção.

---

👨‍💻 **Autor(a):** Amanda Neves  
📅 2025
