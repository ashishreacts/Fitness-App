import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Container, List, Menu, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import { mainListItems } from "./NavItem";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="https://www.joonsquare.com/usermanage/image/business/aj-fitness-vellore-28650/aj-fitness-vellore-logo.jpg"
            alt="Fitness"
            style={{ height: "60px" }}
          />

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
              <List component="nav" sx={{ display: "flex" }}>
                {mainListItems}
              </List>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <List component="nav" sx={{ display: "flex" }}>
              {mainListItems}
            </List>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
