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
  const [filter, setFilter] = useState(false);
  const { fetchByParams } = useProducts();
  return (
    <>
      {filter ? (
        <Grid>
          <Paper sx={{ background: "transparent", boxShadow: "none" }}>
            <FormControl sx={{ display: "flex" }}>
              <RadioGroup
                onChange={(e) => fetchByParams("type", e.target.value)}
                sx={{
                  display: "flex",
                }}
              >
                <FormControlLabel
                  value="jackets"
                  control={<Radio color="primary" />}
                  label="куртки"
                  sx={{ display: "inline-block" }}
                />
                <FormControlLabel
                  value="t-shirts"
                  control={<Radio />}
                  label="футболки"
                  sx={{ display: "inline-block" }}
                />
                <FormControlLabel
                  value="skirts"
                  control={<Radio />}
                  label="юбки"
                  sx={{ display: "inline-block" }}
                />
                <FormControlLabel
                  value="ropmpers"
                  control={<Radio />}
                  label="пижамы"
                  sx={{ display: "inline-block" }}
                />
                <FormControlLabel
                  value="all"
                  control={<Radio />}
                  label="все"
                  sx={{ display: "inline-block" }}
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
      ) : (
        <Button onClick={() => setFilter(true)} sx={{ position: "relative" }}>
          <FilterAltIcon color="secondary" sx={{ position: "absolute" }} />
        </Button>
      )}
    </>
  );
};

export default SideBar;
