import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";  // Import AuthProvider
import AppRoutes from "./routes/Routes";
import Header from "./layouts/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#00d4ff" },
      secondary: { main: "#090979" },
      background: { default: darkMode ? "#121212" : "#f4f6f8" },
    },
    typography: { fontFamily: "Jost, sans-serif" },
  });

  return (
    <AuthProvider>  {/* ✅ Wrap the whole app in AuthProvider */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
