# 🌐 Projeto 2 – SPA React + API Node.js (UTFPR)

Aplicação completa composta por **frontend em React (Vite)** e **backend em Node.js + Express + MongoDB**, atendendo ao enunciado do **Projeto 2 – ES47B**.

---

## 📁 Estrutura

```
backend/
   src/
      routes/
      models/
      config/
   docker-compose.yml
   seed.js
   .env.example

frontend/
   src/
      components/
      contexts/
      App.jsx
      api.js
```

---

## 🚀 Tecnologias

**Frontend:**  
- React + Vite  
- Context API  
- Material UI  
- Axios  

**Backend:**  
- Node.js + Express  
- MongoDB + Mongoose  
- JWT  
- bcrypt, helmet, compression, rate-limit  
- Docker + Docker Compose  

---

## 🧪 Funcionalidades

- 🔐 Login com JWT  
- 🔍 Busca de itens  
- ➕ Inserção de novos itens  
- 🎯 SPA baseada no Projeto 1  
- 🛡 Middlewares de segurança  
- ⚡ Cache + compressão  

---

## 🔑 Usuário para login

```
usuário: teste
senha:   senha123
```

Criado via `seed.js`.

---

## 🐳 Como rodar

### Backend (Docker)

```bash
cd backend
copy .env.example .env
docker-compose up --build
docker-compose exec app node seed.js
```

API:  
http://localhost:4000  
http://localhost:4000/health

---

### Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Acesse:  
http://localhost:5173

---

## 👩‍💻 Autora

**Amanda Neves** – ADS · UTFPR  
