import React, { useState } from "react";
import { Box, TextField, Button, InputAdornment, MenuItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchForm({ onSearch, loading }) {
  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(12);
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!q || q.trim().length === 0) errs.q = "O termo de busca é obrigatório.";
    if (!limit || Number(limit) <= 0) errs.limit = "Informe um limite válido (>0).";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    onSearch(q.trim(), Number(limit));
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3, display: 'flex', gap: 2 }}>
      <TextField
        label="Busca"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        error={!!errors.q}
        helperText={errors.q}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start"><SearchIcon /></InputAdornment>
          )
        }}
      />
      <TextField
        select
        label="Limite"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        error={!!errors.limit}
        helperText={errors.limit}
        sx={{ width: 120 }}
      >
        {[6, 12, 24, 48].map(n => (
          <MenuItem key={n} value={n}>{n}</MenuItem>
        ))}
      </TextField>
      <Button variant="contained" type="submit" disabled={loading}>Buscar</Button>
    </Box>
  );
}