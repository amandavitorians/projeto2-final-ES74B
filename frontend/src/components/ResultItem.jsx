import React from "react";
import { Box, Typography } from "@mui/material";

export default function ResultItem({ item }) {
  return (
    <Box
      component="li"
      sx={{
        listStyle: "none",
        mb: 3,
        p: 2,
        borderRadius: 3,
        bgcolor: "rgba(0,0,0,0.02)",
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
        {item.title}
      </Typography>

      {item.description && (
        <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
          {item.description}
        </Typography>
      )}

      {item.sourceUrl && (
        <Box sx={{ textAlign: "center" }}>
          <img
            src={item.sourceUrl}
            alt={item.title}
            style={{
              maxWidth: "100%",
              maxHeight: 320,
              borderRadius: 12,
              objectFit: "cover",
            }}
          />
        </Box>
      )}
    </Box>
  );
}
