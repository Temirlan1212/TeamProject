// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import Carousel from "react-elastic-carousel";
// import { useProducts } from "../../contexts/ProductContext";
// import Item from "./Item";

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const itemsToShow = 3;
// const getMid = () => Math.ceil(itemsToShow / 2) - 1; // 0 based
// function Hero2() {
//   const [midItemIndex, setMidItemIndex] = useState(getMid);

//   const { products } = useProducts();
//   console.log(products);

//   const onChange = (_, next) => {
//     const mid = getMid();
//     setMidItemIndex(mid + next.index);
//   };

//   return (
//     <div style={{ width: "1100px", margin: "0 auto" }}>
//       <Carousel
//         itemsToShow={itemsToShow}
//         onNextStart={onChange}
//         onPrevStart={onChange}
//       >
//         {products.map((item, idx) => (
//           <Item key={item.name}> {item.name}</Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }
// export default Hero2;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import classes from "./Hero2.module.css";
import { Button, CardActionArea, CardActions } from "@mui/material";

import Box from "@mui/material/Box";

const Hero2 = () => {
  return (
    <div
      style={{
        backgroundColor: "#cfa972",
        padding: "100px",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          my: "100px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "rgba(255, 255, 255, 0)",
            border: "none",
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            margin: "10px",
          }}
        >
          <CardContent>
            <Typography>SHOP BABY</Typography>
          </CardContent>
          <CardActionArea>
            <CardMedia
              className={classes.Hero_Card}
              component="img"
              height="400"
              image="https://ms0511.cafe24.com/main_photo/adult_0210.jpg"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>

        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "rgba(255, 255, 255, 0)",
            border: "none",
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            margin: "10px",
          }}
        >
          <CardActionArea>
            <CardMedia
              className={classes.Hero_Card}
              component="img"
              height="400"
              image="https://ms0511.cafe24.com/main_photo/baby_0210.jpg"
              alt="green iguana"
            />
          </CardActionArea>
          <CardContent>
            <Typography>SHOP BABY</Typography>
          </CardContent>
        </Card>

        <Card
          sx={{ maxWidth: 345 }}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0)",
            border: "none",
            display: "flex",
            boxShadow: "none",
            alignItems: "center",
            flexDirection: "column",
            margin: "10px",
          }}
        >
          <CardContent sx={{ backgroundColor: "rgba('255, 255, 255, 0')" }}>
            <Typography>SHOP BABY</Typography>
          </CardContent>
          <CardActionArea>
            <CardMedia
              className={classes.Hero_Card}
              component="img"
              height="400"
              image="https://ms0511.cafe24.com/main_photo/Kids_0210.jpg"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};

export default Hero2;
