import { Box } from "@mui/system";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { useProducts } from "../../contexts/ProductContext";
import Item from "./Item";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const itemsToShow = 3;
const getMid = () => Math.ceil(itemsToShow / 2) - 1; // 0 based
function Slider1() {
  const [midItemIndex, setMidItemIndex] = useState(getMid);
  const { products } = useProducts();

  const onChange = (_, next) => {
    const mid = getMid();
    setMidItemIndex(mid + next.index);
  };

  return (
    <Box
      sx={{
        maxWidth: { lg: "1100px", sm: "700px" },
        padding: "30px 0",
        display: { sm: "none", lg: "block", md: "block" },
        backgroundColor: "beige",
        border: "2px solid grey",
      }}
    >
      <h1 style={{ color: "#616161" }}>Большой выбор</h1>
      <Carousel
        itemsToShow={itemsToShow}
        onNextStart={onChange}
        onPrevStart={onChange}
        sx={{ display: "flex", flexWrap: "wrap" }}
      >
        {products.map((item, idx) => (
          <Item
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "200px",
              height: "250px",
              width: "100%",
              backgroundImage: `url(${item.picture})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              color: "#fff",
              margin: "60px",
              fontSize: "4em",
              border: "2px solid grey",
              transition:
                midItemIndex === idx
                  ? "transform 700ms ease"
                  : "transform 300ms ease",

              transform: midItemIndex === idx ? "scale(1)" : "scale(0.6)",
            }}
            key={item}
          ></Item>
        ))}
      </Carousel>
    </Box>
  );
}

const rootElement = document.getElementById("root");

export default Slider1;
