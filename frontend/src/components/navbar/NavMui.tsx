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

const pages = [
  { menuItem: "Strona Główna", linkPath: "/" },
  { menuItem: "Szkolenia", linkPath: "/trainings" },
  { menuItem: "O nas", linkPath: "/about" },
  { menuItem: "Kontakt", linkPath: "/contact" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" style={{ background: "lightgreen" }}>
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
                style={{ height: "3.5vw", width: "3.5vw" }}
              />
            </div>
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ menuItem, linkPath }, index) => (
              <Link to={linkPath} style={{textDecoration: 'none'}}>
                <Button
                  key={`${menuItem}-${index}`}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block", fontSize: '2vh', marginRight: '1vw' }}
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
