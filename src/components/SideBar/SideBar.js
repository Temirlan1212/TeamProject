import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContext";

const SideBar = () => {
  const [filter, setFilter] = useState(true);
  const { fetchByParams } = useProducts();
  return (
    <>
      {filter ? (
        <Grid>
          <Paper sx={{ background: "transparent", boxShadow: "none" }}>
            <Button
              value="jackets"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="куртки"
              sx={{ display: "inline-block" }}
              variant="standard"
              sx={{ fontWeight: 900, color: "brown" }}
            >
              куртки
            </Button>
            <Button
              value="t-shirts"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="футболки"
              sx={{ display: "inline-block" }}
              sx={{ fontWeight: 900, color: "brown" }}
            >
              футболки
            </Button>
            <Button
              value="skirts"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="юбки"
              sx={{ display: "inline-block" }}
              sx={{ fontWeight: 900, color: "brown" }}
            >
              юбки
            </Button>
            <Button
              value="ropmpers"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="пижамы"
              sx={{ display: "inline-block" }}
              sx={{ fontWeight: 900, color: "brown" }}
            >
              пижамы
            </Button>
            <Button
              value="all"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="все"
              sx={{ display: "inline-block" }}
              sx={{ fontWeight: 900, color: "brown" }}
            >
              все
            </Button>
          </Paper>
        </Grid>
      ) : (
        ""
        // <Button onClick={() => setFilter(true)} sx={{ position: "relative" }}>
        //   <FilterAltIcon color="secondary" sx={{ position: "absolute" }} />
        // </Button>
      )}
    </>
  );
};

export default SideBar;
