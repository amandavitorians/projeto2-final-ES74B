import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useAppContext } from "../contexts/AppContext";
import { loginRequest } from "../api";

export default function Login() {
  const { dispatch } = useAppContext();
  const [username, setUsername] = useState("teste");
  const [password, setPassword] = useState("senha123");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginRequest(username, password);
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } catch (err) {
      alert("Login inválido");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          width: "100%",
          maxWidth: 420,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, textAlign: "center" }}>
          Acesse sua conta
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "text.secondary", textAlign: "center" }}>
          Use o usuário de teste: <strong>teste / senha123</strong>
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
            size="medium"
          />
          <TextField
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            sx={{ mb: 3 }}
            size="medium"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
