import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider  } from '@mui/material';
import { Route, Routes } from "react-router-dom";

// Own Components
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/contact/Contact";
import Slides from "./components/slides/Slides";
import Trainings from "./components/trainings/Trainings";
import { useState } from "react";
import NavMui from "./components/navbar/NavMui";
import NotFound from "./components/common/NotFound";

export default function App() {
  const [theme, colorMode] = useMode();
  const [currentTab, setCurrentTab] = useState<number>(1);

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app" >
          <NavMui/>
            <Routes>
              <Route path='/' element={<Slides setCurrentTab={setCurrentTab} key='route1'/>}/>
              <Route path='/oNas' element={<AboutUs/>} key='route2'/>
              <Route path='/kontakt' element={<Contact/>} key='route3'/>
              <Route path='/szkolenia' element={<Trainings currentTab={currentTab} setCurrentTab={setCurrentTab}/>} key='route4'/>
              <Route path='*' element={<NotFound/>} key='route-non-found'/>
            </Routes>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}
