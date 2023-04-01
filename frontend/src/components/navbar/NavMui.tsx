import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
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
    <AppBar position="fixed" className='nav-main-general'>
      <Container className='navbar-main-content' maxWidth="xl" >
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
                src="./images/Logo_biale2.png"
                alt="logo_navbar"
                className='nav-img-logo'
              />
            </div>
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          
          <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: "flex" } }} >
            {pages.map(({ menuItem, linkPath }, index) => (
              <Link to={linkPath} style={{textDecoration: 'none'}} key={`${menuItem}-${index}-link`}
              >
                <Button
                  key={`${menuItem}-${index}`}
                  sx={{ my: 1, color: "white", display: "block", marginRight: '1vw', fontWeight: '500', letterSpacing: '0.2vw', zIndex: '20' }}
                  className='nav-link-item navButton2'

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
