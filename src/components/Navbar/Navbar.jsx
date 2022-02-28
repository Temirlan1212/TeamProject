import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, useScrollTrigger } from "@mui/material";
import ScrollToColor01 from "../../ScrollToHide";
import classes from "./Navbar.module.css";

const pages = [
  { name: "PRODUCTS", link: "/products", id: 1 },
  { name: "ABOUT US", link: "/aboutus", id: 2 },
  { name: "CONTACTS", link: "/contacts", id: 3 },
  { name: "HOME", link: "/", id: 4 },
];

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ScrollToColor01>
      <AppBar id="navbar_color" position="sticky" className={classes.Appbar}>
        <Container maxWidth="lg" sx={{ margin: "0 auto" }}>
          <Toolbar disableGutters>
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <img src="" alt="" />
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={page.link}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
                {/* ADMIN PANEL */}
                {email == ADMIN ? (
                  <MenuItem>
                    <Link to="/admin">
                      <Typography textAlign="center">ADMIN PANNEL</Typography>
                    </Link>
                  </MenuItem>
                ) : null}
                {/* ADMIN PANEL */}
              </Menu>
            </Box>
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                HOME
              </Typography>
            </Link>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              {pages.map((page) => (
                <Link to={page.link}>
                  <Button
                    className={classes.Button}
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#ff9100",
                      display: "block",
                      fontSize: 12,
                      fontFamily: "Monospace",
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}

              {/* ADMIN PANEL */}
              {email == ADMIN ? (
                <Link to="/admin">
                  <Button
                    sx={{
                      my: 2,
                      color: "#ff9100",
                      display: "block",
                      fontSize: 12,
                    }}
                    className={classes.Button}
                  >
                    ADMIN PANEL
                  </Button>
                </Link>
              ) : (
                <Link to="/cart">
                  <Button>
                    <IconButton sx={{ color: "white" }}>
                      <Badge color="secondary">
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  </Button>
                </Link>
              )}
              {/* ADMIN PANEL */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {email ? (
                <Button
                  id="button"
                  variant="outlined"
                  color="error"
                  sx={{ my: 2, display: "block", fontFamily: "Monospace" }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : null}

              {email ? null : (
                <Link to="/auth">
                  <Button
                    id="button"
                    variant="outlined"
                    color="error"
                    sx={{ my: 2, display: "block", fontFamily: "Monospace" }}
                    onClick={handleLogout}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ScrollToColor01>
  );
};
export default Navbar;
