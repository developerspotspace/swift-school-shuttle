import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import Sidebar from "../layouts/Sidebar";
import BusTrackingMap from "../components/BusTrackingMap";
import ChatBox from "../components/ChatBox";
import { useNavigate } from "react-router-dom";

const DashboardDriver = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "240px" }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Driver Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 3, textAlign: "center" }}>Assigned Routes</Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 3, textAlign: "center" }}>Trip Status</Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 3, textAlign: "center" }}>Emergency Alerts</Paper>
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Live Bus Location
        </Typography>
        <Paper sx={{ p: 2 }}>
          <BusTrackingMap />
        </Paper>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Chat with Parent
        </Typography>
        <Paper sx={{ p: 2 }}>
          <ChatBox />
        </Paper>

        {/* Logout Button */}
        <Button variant="contained" color="secondary" sx={{ mt: 3 }} onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardDriver;
