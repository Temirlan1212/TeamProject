import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";
import SideBar from "../../SideBar/SideBar";
import AddProduct from "../AddProduct/AddProduct";
import MediaCard from "../AddProduct/AddProduct";
import ProductCard from "../ProductCard/ProductCard";
import Slider1 from "../../Slider/Slider1";

const ProductList = ({ products }) => {
  const { getProducts } = useProducts();

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
    <>
      <div
        style={{
          backgroundImage: "url()",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "600px",
          paddingBottom: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "list-item",
            listStyleType: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "",
              alignItems: "center",
              flexDirection: "column",
              paddingBottom: "50px",
            }}
          >
            <TextField
              label="Search"
              variant="outlined"
              sx={{ my: "2vw", width: "70vw", borderRadius: "50px" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SideBar />
          </div>

          <hr style={{ maxWidth: "700px" }}></hr>
          <Grid
            container
            spacing={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
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

      <Slider1 />
    </>
  );
};

export default ProductList;
