import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const ProductDetails = () => {
  const theme = useTheme();

  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  const [po, setPo] = React.useState(productDetails.price);

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    // <div
    //   className="details-wrap"
    //   style={{ display: "flex", justifyContent: "space-evenly" }}
    // >
    //   <div>
    //     <img id="details-img" src={productDetails.picture} alt="" />
    //   </div>

    //   <div className="details-list">
    //     <h2 className="title">{productDetails.name}</h2>
    //     <h3 className="type">{productDetails.type}</h3>
    //     <h4 className="price">{productDetails.price}</h4>
    //     <h5 className="descr">{productDetails.description}</h5>
    //   </div>
    // </div>

    <Card
      sx={{
        display: "flex",
        justifyContent: "center",

        height: "600px",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 400, border: "1px solid #616161", height: "500px" }}
        image={productDetails.picture}
        alt="Live from space album cover"
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <CardContent
          sx={{
            flex: "1 0 auto",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontWeight: "800",
              fontSize: "40px",
              color: "#616161",
              my: "20px",
            }}
          >
            Order
          </Typography>

          <Typography
            component="div"
            variant="h5"
            sx={{
              fontWeight: "800",
              fontSize: "40px",
              color: "#616161",
              my: "20px",
            }}
            onClick={() => setPo(po * 2)}
          >
            {po}
          </Typography>

          <Typography
            component="div"
            variant="h5"
            sx={{
              fontWeight: "800",
              fontSize: "40px",
              color: "#616161",
              my: "20px",
            }}
          >
            {productDetails.description}
          </Typography>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              fontWeight: "800",
              fontSize: "40px",
              color: "#616161",
              my: "20px",
            }}
          >
            {productDetails.type}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ProductDetails;
