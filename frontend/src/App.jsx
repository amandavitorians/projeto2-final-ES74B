import React from "react";
import { Container, Typography, Box, Button, Paper, Divider } from "@mui/material";
import SearchForm from "./components/SearchForm";
import ResultList from "./components/ResultList";
import ErrorMessage from "./components/ErrorMessage";
import InsertForm from "./components/InsertForm";
import Login from "./components/Login";
import { useAppContext } from "./contexts/AppContext";
import { searchCats } from "./api";

export default function App() {
  const { state, dispatch } = useAppContext();
  const { loading, error, token, user } = state;

  async function performSearch(q, limit = 12) {
    if (!token) {
      dispatch({ type: "FETCH_ERROR", payload: "É necessário estar logado para buscar." });
      return;
    }
    dispatch({ type: "SET_QUERY", payload: { q, limit } });
    dispatch({ type: "FETCH_START" });
    try {
      const data = await searchCats({ q, limit, token });
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err?.response?.data?.message || err.message || "Erro na requisição",
      });
    }
  }

  function handleLogout() {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 50%, #fff3e0 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={4}
          sx={{
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            bgcolor: "background.paper",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: 28, md: 34 } }}>
              Projeto 2 – Cat Gallery
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary", fontSize: { xs: 14, md: 16 } }}>
              Login, busca e inserção de imagens de gatos, usando SPA em React e Back-End próprio.
            </Typography>
          </Box>

          {!token ? (
            <Login />
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 3,
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                    Bem-vindo, <strong>{user?.username}</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Realize buscas e cadastre novas imagens de gatos.
                  </Typography>
                </Box>
                <Button variant="outlined" color="secondary" onClick={handleLogout} size="medium">
                  Logout
                </Button>
              </Box>

              <Divider sx={{ mb: 3 }} />

              <SearchForm onSearch={performSearch} loading={loading} />

              {error && (
                <Box sx={{ mt: 2 }}>
                  <ErrorMessage message={error} />
                </Box>
              )}

              <Box sx={{ mt: 3 }}>
                <ResultList />
              </Box>

              <Divider sx={{ my: 4 }} />

              <InsertForm />
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
}
