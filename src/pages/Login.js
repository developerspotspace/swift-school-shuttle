import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PeopleIcon from "@mui/icons-material/People";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#fff",
      }}
    >
      <Typography variant="h4" color="#090979" sx={{ mb: 3 }}>
        Select Your Role
      </Typography>

      <Box sx={{ display: "flex", gap: 4 }}>
        <Card
          sx={{
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.05)" },
          }}
          onClick={() => navigate("/login/admin")}
        >
          <CardContent>
            <AdminPanelSettingsIcon sx={{ fontSize: 50, color: "#00d4ff" }} />
            <Typography variant="h6">Admin</Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.05)" },
          }}
          onClick={() => navigate("/login/parent")}
        >
          <CardContent>
            <PeopleIcon sx={{ fontSize: 50, color: "#00d4ff" }} />
            <Typography variant="h6">Parent</Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.05)" },
          }}
          onClick={() => navigate("/login/driver")}
        >
          <CardContent>
            <DirectionsBusIcon sx={{ fontSize: 50, color: "#00d4ff" }} />
            <Typography variant="h6">Driver</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Login;
