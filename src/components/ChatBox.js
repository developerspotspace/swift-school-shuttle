import { Box, TextField, IconButton, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { sender: "Parent", text: "Hello, when will the bus arrive?" },
    { sender: "Driver", text: "It will be there in 5 minutes!" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "Parent", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <Paper sx={{ p: 2, height: "300px", overflowY: "auto" }}>
      <Typography variant="h6">Chat with Driver</Typography>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index} sx={{ textAlign: msg.sender === "Parent" ? "right" : "left" }}>
            <ListItemText primary={msg.text} secondary={msg.sender} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: "flex", mt: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <IconButton color="primary" onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatBox;
