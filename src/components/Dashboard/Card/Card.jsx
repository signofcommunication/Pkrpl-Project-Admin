import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function MediaCard({ title, price, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rp{price.toLocaleString("id-ID")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Edit
        </Button>
        <Button size="small" variant="contained" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
