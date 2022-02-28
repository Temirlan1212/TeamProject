import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { ADMIN } from "../../../helpers/consts";
import "./ProductCard.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

export default function MediaCard({ item }) {
  const { deleteProduct, addProductToCart, checkProductInCart } = useProducts();
  const {
    user: { email },
  } = useAuth();

  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        height="280"
        className="howpic"
        image={item.picture}
        alt="green iguana"
      />
      <CardContent sx={{ background: "#ccff90" }}>
        <Typography gutterBottom variant="h5" component="div" className="title">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {email === ADMIN ? (
          <>
            {" "}
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              DELETE
            </Button>
            <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
              EDIT
            </Button>
          </>
        ) : null}

        <span onClick={() => navigate(`/products/${item.id}`)}>more...</span>
      </CardActions>
    </Card>
  );
}
