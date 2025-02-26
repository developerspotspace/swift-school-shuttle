import { Box, Paper, Typography, List, ListItem, ListItemText, Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Bus #12 is delayed by 10 minutes", type: "alert" },
    { id: 2, message: "Bus #5 has arrived at School", type: "info" },
    { id: 3, message: "Emergency: Traffic congestion on Route 3", type: "warning" },
  ]);

  const unreadCount = notifications.length;

  return (
    <Paper sx={{ p: 2, position: "relative" }}>
      <Typography variant="h6">Notifications</Typography>
      <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
        <Badge badgeContent={unreadCount} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <List>
        {notifications.map((notif) => (
          <ListItem key={notif.id}>
            <ListItemText primary={notif.message} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default NotificationsPanel;
