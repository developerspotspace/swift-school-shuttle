import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

const LoginParent = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard/parent");  // Redirect to Parent Dashboard
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Parent Login
      </Typography>
      <TextField label="Email" variant="outlined" sx={{ mb: 2, width: "300px" }} />
      <TextField label="Password" type="password" variant="outlined" sx={{ mb: 2, width: "300px" }} />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default LoginParent;
