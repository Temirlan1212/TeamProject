import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { useProducts } from "../../contexts/ProductContext";
import Item from "./Item";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const itemsToShow = 3;
const getMid = () => Math.ceil(itemsToShow / 2) - 1; // 0 based
function Hero2() {
  const [midItemIndex, setMidItemIndex] = useState(getMid);

  const { products } = useProducts();
  console.log(products);

  const onChange = (_, next) => {
    const mid = getMid();
    setMidItemIndex(mid + next.index);
  };

  return (
    <div style={{ width: "1100px", margin: "0 auto" }}>
      <Carousel
        itemsToShow={itemsToShow}
        onNextStart={onChange}
        onPrevStart={onChange}
      >
        {products.map((item, idx) => (
          <Item key={item.name}> {item.name}</Item>
        ))}
      </Carousel>
    </div>
  );
}
export default Hero2;
