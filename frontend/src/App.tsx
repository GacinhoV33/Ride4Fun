import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import { tokens } from "./theme";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Own Components
import NavbarComponent from "./components/navbar/NavbarComponent";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/contact/Contact";
import Slides from "./components/slides/Slides";
import Trainings from "./components/trainings/Trainings";

export default function App() {
  const [theme, colorMode] = useMode();
  const theme2 = useTheme();
  const colors = tokens(theme2.palette.mode);
  return (
    <Router>
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app" style={{color: colors.secondary[200]}}>
          <NavbarComponent/>
            <Routes>
              <Route path='/' element={<Slides/>}/>
              <Route path='/about' element={<AboutUs/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/trainings' element={<Trainings/>}/>
            </Routes>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
    </Router>
  );
}
