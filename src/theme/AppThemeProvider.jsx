import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { grey, pink } from "@mui/material/colors";

const AppThemeProvider = (props) => {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    typography: {
      allVariants: {
        fontSize: 15,
        fontFamily: "Oleo Script Swash Caps",
      },
    },
    palette: {
      primary: {
        main: grey[500],
      },
      secondary: {
        main: pink[700],
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          sx: {
            px: 2,
            py: 1,
          },
          variant: "subtitle2",
          textTransform: "capitalize",
        },
      },
      MuiStack: {
        defaultProps: {
          sx: {
            px: 2,
            py: 1,
          },
          spacing: 2,
          direction: "row",
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
      },
      MuiLink: {
        defaultProps: {
          sx: {
            color: (theme) => theme.palette.primary.main,
          },
          underline: "none",
        },
      },
      MuiButton: {
        defaultProps: {
          size: "small",
          p: 0,
        },
        variant: "text",
      },
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppThemeProvider;
