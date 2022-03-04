import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Menu, TextField, useScrollTrigger } from "@mui/material";
import ScrollToColor01 from "../../ScrollToHide";
import classes from "./Navbar.module.css";

import logo from "../../assets/logo1.png";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useProducts } from "../../contexts/ProductContext";

import CheckroomIcon from "@mui/icons-material/Checkroom";
import CallIcon from "@mui/icons-material/Call";
import BusinessIcon from "@mui/icons-material/Business";

import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { cart } = useProducts();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const pages = [
    { name: "ТОВАРЫ", link: "/products", id: 1 },
    { name: "О НАС", link: "/aboutus", id: 2 },
    { name: "КОНТАКТЫ", link: "/contacts", id: 3 },
    { name: "ДОМ", link: "/", id: 4 },
  ];

  const images = [
    {
      imgPath: logo,
    },
  ];

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
    <Box sx={{ display: "flex" }}>
      <ScrollToColor01>
        <AppBar position="fixed" open={open}>
          <center>
            <Link to="/">
              <img
                className={classes.navbarImg}
                src={logo}
                style={{
                  marginLeft: "30px",
                  marginTop: "5px",
                  height: "40px",
                  width: "300px",
                }}
              />
            </Link>
          </center>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
                marginTop: "-120px",

                ...(open && { display: "none" }),
              }}
            >
              <ChevronRightIcon />
            </IconButton>

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
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              {/* {pages.map((page) => (
                <Link to={page.link}>
                  <Button
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: "brown",
                      display: "block",
                      fontSize: 24,
                      fontFamily: "Monospace",
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))} */}
            </Box>

            {/* <TextField
              label="Search"
              variant="standard"
              sx={{ width: "35vw" }}
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
            /> */}
          </Toolbar>
        </AppBar>
      </ScrollToColor01>

      <Drawer variant="permanent" open={open} sx={{ backgroundColor: "black" }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ marginTop: "49px" }} />
        {/* ADMIN PANEL */}
        {email == ADMIN ? (
          <Link to="/admin">
            <Box
              sx={{
                my: 2,
                color: "#ff9100",
                display: "block",
                fontSize: 12,
              }}
              className={classes.Button}
            >
              <List>
                {["ADMIN"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <AdminPanelSettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Link>
        ) : (
          <Link to="/cart">
            <List>
              {["Cart"].map((text, index) => (
                <ListItem button key={text}>
                  <IconButton sx={{ color: "brown" }}>
                    <Badge
                      badgeContent={cart?.products ? cart.products.length : 0}
                      color="secondary"
                    >
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Link>
        )}
        <Divider />
        <Box sx={{ flexGrow: 0 }}>
          <Link to="/products">
            <Box
              id="button"
              variant="outlined"
              color="error"
              sx={{ my: 2, display: "block", border: "none" }}
              // onClick={handleLogout}
            >
              <List>
                {["ТОВАРЫ"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <CheckroomIcon sx={{ color: "brown" }} />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Link>

          <Link to="/contacts">
            <Box
              id="button"
              variant="outlined"
              color="error"
              sx={{ my: 2, display: "block", fontFamily: "Monospace" }}
              // onClick={handleLogout}
            >
              <List>
                {["Контакты"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <CallIcon sx={{ color: "brown" }} />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Link>
        </Box>

        <Link to="/aboutus">
          <Box
            id="button"
            variant="outlined"
            color="error"
            sx={{ my: 2, display: "block", fontFamily: "Monospace" }}
            // onClick={handleLogout}
          >
            <List>
              {["О нас"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    <BusinessIcon sx={{ color: "brown" }} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Link>

        <Link to="/map">
          <Box
            id="button"
            variant="outlined"
            color="error"
            sx={{ my: 2, display: "block", fontFamily: "Monospace" }}
            // onClick={handleLogout}
          >
            <List>
              {["Карта"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    <AddLocationAltIcon sx={{ color: "brown" }} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Link>

        {email ? (
          <Link to="/auth">
            <Box
              id="button"
              variant="outlined"
              color="error"
              sx={{ my: 2, display: "block", fontFamily: "Monospace" }}
              onClick={handleLogout}
            >
              <List>
                {["Log in"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <LoginIcon sx={{ color: "brown" }} />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Link>
        ) : (
          <Link to="/auth">
            <Box
              id="button"
              variant="outlined"
              color="error"
              sx={{ my: 2, display: "block", fontFamily: "Monospace" }}
              onClick={handleLogout}
            >
              <List>
                {["Log in"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <LoginIcon sx={{ color: "brown" }} />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Link>
        )}
        {/* ADMIN PANEL */}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
