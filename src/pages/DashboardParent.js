import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import Sidebar from "../layouts/Sidebar";
import NotificationsPanel from "../components/NotificationsPanel";
import ChatBox from "../components/ChatBox";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const tripColumns = [
  { field: "id", headerName: "Trip ID", width: 100 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "pickup", headerName: "Pick-up", width: 150 },
  { field: "dropoff", headerName: "Drop-off", width: 150 },
  { field: "status", headerName: "Status", width: 120 },
];

const tripRows = [
  { id: 1, date: "2024-02-25", pickup: "Home", dropoff: "School", status: "Completed" },
  { id: 2, date: "2024-02-26", pickup: "School", dropoff: "Home", status: "In Progress" },
];

const DashboardParent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "240px" }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Parent Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <NotificationsPanel />
          </Grid>
          <Grid item xs={12} md={6}>
            <ChatBox />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Child's Trip History
        </Typography>
        <Paper sx={{ height: 300 }}>
          <DataGrid rows={tripRows} columns={tripColumns} pageSize={5} />
        </Paper>

        {/* Logout Button */}
        <Button variant="contained" color="secondary" sx={{ mt: 3 }} onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardParent;
