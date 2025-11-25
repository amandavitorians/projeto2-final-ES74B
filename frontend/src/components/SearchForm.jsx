import React, { useState } from "react";
import { Box, TextField, Button, MenuItem } from "@mui/material";

export default function SearchForm({ onSearch, loading }) {
  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(12);
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    if (!q.trim()) {
      newErrors.q = "Digite um termo para buscar.";
    }
    if (!limit || limit <= 0) {
      newErrors.limit = "Informe um limite válido.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSearch(q, Number(limit));
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField
        label="Buscar por gatos..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        fullWidth
        size="medium"
        error={!!errors.q}
        helperText={errors.q}
      />
      <TextField
        select
        label="Limite"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        error={!!errors.limit}
        helperText={errors.limit}
        size="medium"
        sx={{ minWidth: 140 }}
      >
        {[6, 12, 24, 48].map((n) => (
          <MenuItem key={n} value={n}>
            {n}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        type="submit"
        disabled={loading}
        size="large"
        sx={{ minWidth: 140 }}
      >
        Buscar
      </Button>
    </Box>
  );
}
