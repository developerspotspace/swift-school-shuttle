import { Box, Paper, Typography } from "@mui/material";

const DashboardWidget = ({ title, value, color }) => {
  return (
    <Paper
      sx={{
        p: 3,
        textAlign: "center",
        background: color,
        color: "#fff",
        borderRadius: 2,
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4">{value}</Typography>
    </Paper>
  );
};

export default DashboardWidget;
