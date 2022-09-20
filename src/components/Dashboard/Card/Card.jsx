import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function MediaCard({ title, price, image, link }) {
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
        <Link
          to={`/product/${link}`}
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          <Button size="small" variant="contained">
            Detail
          </Button>
        </Link>
        <Button size="small" variant="contained" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
