import React, { memo } from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

function ResultItemInner({ item }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="180"
        image={item.url}
        alt={`Imagem ${item.id}`}
      />
      <CardContent>
        <Typography variant="body2">ID: {item.id}</Typography>
        <Typography variant="body2">Size: {item.width} x {item.height}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" target="_blank" href={item.url}>Abrir</Button>
      </CardActions>
    </Card>
  );
}

export default memo(ResultItemInner);