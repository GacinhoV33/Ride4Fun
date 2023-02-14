import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import { tokens } from "./theme";


export default function App() {
  const [theme, colorMode] = useMode();
  const theme2 = useTheme();
  const colors = tokens(theme2.palette.mode);
  return (
    //@ts-ignore
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app" style={{color: colors.secondary[200]}}>
            Test
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}
