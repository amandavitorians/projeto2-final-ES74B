import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useAppContext } from "../contexts/AppContext";
import { insertCat } from "../api";

export default function InsertForm() {
  const { state } = useAppContext();
  const { token } = state;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!token) {
      alert("Você precisa estar logado para inserir.");
      return;
    }

    try {
      const item = await insertCat({
        title,
        description,
        sourceUrl,
        tags: ["cat"],
        token,
      });
      alert("Item inserido: " + item.title);
      setTitle("");
      setDescription("");
      setSourceUrl("");
    } catch (err) {
      alert("Erro ao inserir item");
    }
  }

  return (
    <Paper
      elevation={2}
      sx={{
        p: { xs: 2, md: 3 },
        borderRadius: 3,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Inserir nova imagem de gato
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
        Preencha os campos abaixo para cadastrar um novo item na galeria.
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
          size="medium"
        />
        <TextField
          label="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          minRows={2}
          sx={{ mb: 2 }}
          size="medium"
        />
        <TextField
          label="URL da imagem"
          value={sourceUrl}
          onChange={(e) => setSourceUrl(e.target.value)}
          fullWidth
          sx={{ mb: 3 }}
          size="medium"
        />
        <Button type="submit" variant="contained" size="large">
          Inserir
        </Button>
      </Box>
    </Paper>
  );
}
