import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/jost";
import "./index.css";

// Define custom theme
const theme = createTheme({
  typography: {
    fontFamily: "Jost, sans-serif",
  },
  palette: {
    primary: {
      main: "#00d4ff", // Primary color
    },
    secondary: {
      main: "#090979", // Secondary color
    },
    background: {
      default: "#f4f6f8", // Light background
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
