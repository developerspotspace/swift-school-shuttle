import Sidebar from "../layouts/Sidebar";
import { Box, Toolbar, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "240px" }}>
        <Toolbar /> {/* Push content below Header */}
        <Typography variant="h4">Welcome to Dashboard</Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
