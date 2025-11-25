# Projeto 2 - Backend (Entregável)

Conteúdo:
- API Express + MongoDB pronta para rodar.
- Autenticação JWT, bcrypt, validação com express-validator.
- Cache simples (node-cache), compressão, helmet, rate-limit.
- Dockerfile e docker-compose para rodar com MongoDB.

## Rodando localmente (Docker)
1. Copiar `.env.example` para `.env` e ajustar `JWT_SECRET`.
2. `docker-compose up --build`
3. API disponível em `http://localhost:4000`
4. Criar seed de usuário: dentro do container ou rodando localmente `node seed.js`.

## Endpoints principais
- POST `/api/auth/login` { username, password } -> { token, user }
- GET `/api/items?term=&limit=` (header Authorization: Bearer <token>)
- POST `/api/items` (header Authorization) { title, description, sourceUrl, tags }

## Observações
- Em produção use Redis para cache e HTTPS com reverse-proxy.
