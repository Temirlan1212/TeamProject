import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <div
      className="details-wrap"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      you entered in the more
    </div>
  );
};

export default ProductDetails;
