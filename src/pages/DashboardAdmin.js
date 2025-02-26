import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import Sidebar from "../layouts/Sidebar";
import DashboardWidget from "../components/DashboardWidgets";
import { DataGrid } from "@mui/x-data-grid";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";

const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "role", headerName: "Role", width: 120 },
  { field: "status", headerName: "Status", width: 100 },
];

const userRows = [
  { id: 1, name: "John Doe", role: "Parent", status: "Active" },
  { id: 2, name: "Jane Smith", role: "Driver", status: "Active" },
  { id: 3, name: "Michael Brown", role: "Admin", status: "Inactive" },
];

const fleetData = [
  { name: "Bus 1", Status: 85 },
  { name: "Bus 2", Status: 60 },
  { name: "Bus 3", Status: 75 },
  { name: "Bus 4", Status: 90 },
];

const DashboardAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");  // Redirect to Login Role Selection Page
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "240px" }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Admin Dashboard
        </Typography>

        {/* Summary Widgets */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} md={4}>
            <DashboardWidget title="Total Users" value="1,500" color="#00d4ff" />
          </Grid>
          <Grid item xs={12} md={4}>
            <DashboardWidget title="Active Buses" value="35" color="#090979" />
          </Grid>
          <Grid item xs={12} md={4}>
            <DashboardWidget title="Reports Generated" value="120" color="#ff9800" />
          </Grid>
        </Grid>

        {/* User Table */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          User List
        </Typography>
        <Paper sx={{ height: 300, mb: 3 }}>
          <DataGrid rows={userRows} columns={userColumns} pageSize={5} />
        </Paper>

        {/* Fleet Status Chart */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Fleet Status
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={fleetData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Status" fill="#00d4ff" />
          </BarChart>
        </ResponsiveContainer>

        {/* Logout Button */}
        <Button variant="contained" color="secondary" sx={{ mt: 3 }} onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardAdmin;
