import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import PeopleIcon from "@mui/icons-material/People";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240; // Sidebar width

const Sidebar = () => {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", top: "64px", background: theme.palette.secondary.main, color: "#fff" },
      }}
    >
      <Toolbar /> {/* Push sidebar below the header */}
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#00d4ff" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon sx={{ color: "#00d4ff" }} />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DirectionsBusIcon sx={{ color: "#00d4ff" }} />
          </ListItemIcon>
          <ListItemText primary="Buses" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
