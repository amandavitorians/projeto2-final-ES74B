# Integração - Frontend (exemplo)

Exemplo de função JS para buscar items usando fetch:

```js
const API = "http://localhost:4000/api";
function login(username, password) {
  return fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  }).then(r => r.json());
}

function searchItems(token, term, limit=12) {
  return fetch(`${API}/items?term=${encodeURIComponent(term)}&limit=${limit}`, {
    headers: { "Authorization": "Bearer " + token }
  }).then(r => r.json());
}
```
