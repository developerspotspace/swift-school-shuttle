import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import RouteIcon from "@mui/icons-material/AltRoute";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DashboardIcon from "@mui/icons-material/Dashboard";

// Styled Components
const HeroSection = styled(Box)({
  textAlign: "center",
  padding: "60px 20px",
  background: "#f5faff",
});

const FeatureCard = styled(Paper)({
  padding: "20px",
  textAlign: "center",
  fontWeight: "bold",
  color: "#090979",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
});

const Footer = styled(Box)({
  textAlign: "center",
  padding: "20px",
  background: "#090979",
  color: "#fff",
});

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          background: "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h6" sx={{ color: "#00d4ff", fontWeight: "bold" }}>
          Swift School Shuttle
        </Typography>
        <Button
          variant="contained"
          sx={{ background: "#00d4ff", color: "#fff", borderRadius: "20px" }}
          onClick={() => navigate("/login")}
        >
          LOGIN
        </Button>
      </Box>

      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h3" fontWeight="bold" color="#090979">
          Welcome to Swift School Shuttle
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1, color: "#555" }}>
          Track your child's school bus in real-time with instant alerts.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              background: "#00d4ff",
              borderRadius: "20px",
              mr: 2,
              "&:hover": { background: "#0096c7" },
            }}
            onClick={() => navigate("/login")}
          >
            GET STARTED
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#090979",
              color: "#090979",
              borderRadius: "20px",
              "&:hover": { background: "#090979", color: "#fff" },
            }}
            onClick={() => navigate("/about-us")}
          >
            ABOUT US
          </Button>
        </Box>
      </HeroSection>

      {/* Key Features */}
      <Box sx={{ textAlign: "center", padding: "50px 20px", background: "#f9fcff" }}>
        <Typography variant="h4" fontWeight="bold" color="#090979">
          Key Features
        </Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={3}>
            <FeatureCard elevation={3}>
              <DirectionsBusIcon sx={{ fontSize: 50, color: "#00d4ff" }} />
              <Typography variant="h6" sx={{ mt: 1 }}>
                Real-Time Tracking
              </Typography>
              <Typography variant="body2" color="textSecondary">
                View live school bus locations with GPS integration.
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={3}>
            <FeatureCard elevation={3}>
              <RouteIcon sx={{ fontSize: 50, color: "#00d4ff" }} />
              <Typography variant="h6" sx={{ mt: 1 }}>
                Automated Route Management
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Efficient route planning for reduced delays.
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={3}>
            <FeatureCard elevation={3}>
              <NotificationsActiveIcon sx={{ fontSize: 50, color: "#00d4ff" }} />
              <Typography variant="h6" sx={{ mt: 1 }}>
                Instant Notifications
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Receive arrival, delay, and emergency alerts.
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={3}>
            <FeatureCard elevation={3}>
              <DashboardIcon sx={{ fontSize: 50, color: "#00d4ff" }} />
              <Typography variant="h6" sx={{ mt: 1 }}>
                Parent & Admin Dashboards
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Monitor pickups, drop-offs, and student attendance.
              </Typography>
            </FeatureCard>
          </Grid>
        </Grid>
      </Box>

      {/* Case Studies Section */}
      <Box sx={{ textAlign: "center", padding: "50px 20px", background: "#e8f4ff" }}>
        <Typography variant="h4" fontWeight="bold" color="#090979">
          Case Studies
        </Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={4}>
            <FeatureCard elevation={2}>
              📌 <Typography variant="h6">India GPS Bus System</Typography>
              <Typography variant="body2" color="textSecondary">
                Reduced wait times by 15% and improved safety.
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard elevation={2}>
              📌 <Typography variant="h6">Dallas MyStop Project</Typography>
              <Typography variant="body2" color="textSecondary">
                Improved fuel efficiency and reduced costs.
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard elevation={2}>
              📌 <Typography variant="h6">Pittsburgh Edulog System</Typography>
              <Typography variant="body2" color="textSecondary">
                Reduced transportation costs by 15%.
              </Typography>
            </FeatureCard>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Footer>
        <Typography variant="body2">
          📞 +254 700 123456 | ✉ support@swiftshuttle.com
        </Typography>
        <Typography variant="body2">Kenyatta University, Nairobi, Kenya</Typography>
        <Typography variant="body2">www.swiftshuttle.com</Typography>
      </Footer>
    </Box>
  );
};

export default Home;
