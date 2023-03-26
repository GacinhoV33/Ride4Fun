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
import { useState } from "react";
import NavMui from "./components/navbar/NavMui";

export default function App() {
  const [theme, colorMode] = useMode();
  const theme2 = useTheme();
  const colors = tokens(theme2.palette.mode);
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <Router>
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app" >
          <NavMui/>
            <Routes>
              <Route path='/' element={<Slides setCurrentTab={setCurrentTab} key='route1'/>}/>
              <Route path='/about' element={<AboutUs/>} key='route2'/>
              <Route path='/contact' element={<Contact/>} key='route3'/>
              <Route path='/trainings' element={<Trainings currentTab={currentTab} setCurrentTab={setCurrentTab}/>} key='route4'/>
            </Routes>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
    </Router>
  );
}
