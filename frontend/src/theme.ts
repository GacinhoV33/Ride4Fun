import { createContext, useState, useMemo } from "react";
import { createTheme, Theme } from "@mui/material/styles";

export type modeType = 'dark' | 'light';

export const tokens = (mode: modeType) => ({
    ...(mode === 'dark' ? {
        primary: {
            100: "#e0e0e0",
            200: "#c2c2c2",
        },
        secondary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
        }
    } : {
        primary: {
            100: "#e0e0e0",
            200: "#c2c2c2",
        },
        secondary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
        }
    }
    )
})

export const themeSettings = (mode: modeType) => {
    const colors = tokens(mode);
    return { 
        palette: {
            mode: mode,
            ...(mode === "dark" ? 
                {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.secondary[100],
                    },
                    neutral: {
                        dark: colors.primary[100],
                        main: colors.primary[100],
                        light: colors.primary[100],
                      },
                      background: {
                        default: colors.primary[100],
                      },

                } : { // TODO Colors for dark and light mode 
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.secondary[100],
                    },
                    neutral: {
                        dark: colors.primary[100],
                        main: colors.primary[100],
                        light: colors.primary[100],
                      },
                      background: {
                        default: colors.primary[100],
                      },

                }

            )
        }
    }
}


export const colorModeContext = createContext({
    toggleColorMode: () => {},
})

export const useMode = (): [Theme, any] => {
    const [mode, setMode] = useState<modeType>("dark");
    const colorMode = useMemo(() => (
        {
            toggleColorMode: () => setMode((prev) => (prev === 'light' ? "dark" : 'light'))
        }
    ), []);
    const theme: Theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
}