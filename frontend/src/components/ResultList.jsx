import React from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";
import { useAppContext } from "../contexts/AppContext";
import ResultItem from "./ResultItem";

export default function ResultList() {
  const { state } = useAppContext();
  const { loading, data } = state;

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />;

  if (!data || data.length === 0) {
    return <Typography variant="body1" sx={{ mt: 3 }}>Nenhum resultado. Faça uma busca acima.</Typography>;
  }

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {data.map((item, idx) => (
        <Grid item xs={12} sm={6} md={4} key={item.id || idx}>
          <ResultItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}