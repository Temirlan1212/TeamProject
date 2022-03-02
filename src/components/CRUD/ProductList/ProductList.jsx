import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";
import SideBar from "../../SideBar/SideBar";
import AddProduct from "../AddProduct/AddProduct";
import MediaCard from "../AddProduct/AddProduct";
import ProductCard from "../ProductCard/ProductCard";

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
    <div
      style={{
        backgroundImage:
          "url(https://www.wallpapers4u.org/wp-content/uploads/children_boy_brother_beach_sand_reflection_coast_sea_ocean_surf_walk_shorts_heels_horizon_sky_53900_1920x1080.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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
          }}
        >
          <TextField
            label="Search"
            variant="outlined"
            sx={{ my: "2vw", width: "35vw", borderRadius: "50px" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SideBar />
        </div>

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
  );
};

export default ProductList;
