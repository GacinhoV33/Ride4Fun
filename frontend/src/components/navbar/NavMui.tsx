import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./NavbarComponent.scss";
import { Link } from "react-router-dom";
import './NavbarComponent.scss';

const pages = [
  { menuItem: "Strona Główna", linkPath: "/" },
  { menuItem: "Szkolenia", linkPath: "/trainings" },
  { menuItem: "O nas", linkPath: "/about" },
  { menuItem: "Kontakt", linkPath: "/contact" },
];


function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" style={{ background: 'transparent' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".5rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <div className="logo">
              <img
                src="./images/Logo_biale.png"
                alt="logo_navbar"
                className='nav-img-logo'
              />
            </div>
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          
          <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: "flex" } }}>
            {pages.map(({ menuItem, linkPath }, index) => (
              <Link to={linkPath} style={{textDecoration: 'none'}}>
                <Button
                  key={`${menuItem}-${index}`}
                  sx={{ my: 1, color: "white", display: "block", marginRight: '1vw', fontWeight: '500', fontFamily: 'fantasy', letterSpacing: '0.2vw', zIndex: '20' }}
                  className='navButton2'
                >
                  {menuItem}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
