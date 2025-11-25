import axios from "axios";

const API_BASE = "http://localhost:4000/api";

export async function loginRequest(username, password) {
  const url = `${API_BASE}/auth/login`;
  const response = await axios.post(url, { username, password });
  return response.data; // { token, user }
}

export async function searchCats({ q, limit = 12, token }) {
  const url = `${API_BASE}/items?term=${encodeURIComponent(q)}&limit=${limit}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
}

export async function insertCat({ title, description, sourceUrl, tags = [], token }) {
  const url = `${API_BASE}/items`;
  const response = await axios.post(
    url,
    { title, description, sourceUrl, tags },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.item;
}
