import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";
import AddProduct from "../AddProduct/AddProduct";
import MediaCard from "../AddProduct/AddProduct";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <div style={{ backgroundColor: "green", height: "100VH" }}>
      <div
        style={{
          display: "flex",
          height: "3000px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div>
          {/* <TextField
          label="Search"
          variant="standard"
          sx={{ margin: "2vw", width: "35vw" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> */}

          <Grid container spacing={6}>
            {products ? (
              products.map((item) => (
                <Grid item>
                  <ProductCard item={item} key={item} />
                </Grid>
              ))
            ) : (
              <>
                <h2>..Loading</h2>
              </>
            )}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
