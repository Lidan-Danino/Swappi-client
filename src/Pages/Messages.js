import { useState, useEffect, useCallback } from "react";
import { getUserConversations, sendMessage } from "../services/messagesData";
import { Container, Grid, TextField, Button, Alert, Box, Typography, Paper, Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Messages = ({ match }) => {
  let chatId = match.params.id;
  const [conversations, setConversations] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [selected, setSelected] = useState({
    chats: {
      _id: 0,
      seller: {
        _id: "",
        avatar: "",
        name: "",
      },
      buyer: {
        _id: "",
        avatar: "",
        name: "",
      },
      conversation: [],
    },
    isBuyer: null,
    myId: 0,
  });
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(null);
  const [alertShow, setAlertShow] = useState(false);

  const handleAlertClose = useCallback(() => {
    setAlertShow(false);
  }, []);

  useEffect(() => {
    getUserConversations()
      .then((res) => {
        setConversations(res);
      })
      .catch((err) => console.log(err));
    if (isSelected) {
      setSelected(conversations.find((x) => x.chats._id === chatId));
    }
  }, [isSelected, chatId]);

  const handleMsgSubmit = (e) => {
    e.preventDefault();
    sendMessage(chatId, message)
      .then((res) => {
        setAlert("Message sent!");
        setAlertShow(true);
        setMessage("");
        setSelected(selected, selected.chats.conversation.push({ message, senderId: res.sender }));
        setTimeout(() => {
          setAlert(null);
          setAlertShow(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  const MessageSender = ({ chat, isBuyer }) => (
    <ListItem button component={Link} to={`/messages/${chat._id}`} onClick={() => setIsSelected(true)} key={chat._id}>
      <ListItemAvatar>
        <Avatar src={isBuyer ? chat.seller.avatar : chat.buyer.avatar} />
      </ListItemAvatar>
      <ListItemText primary={isBuyer ? chat.seller.name : chat.buyer.name} />
    </ListItem>
  );

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4}>
          <Typography variant="h4" component="h2">
            Conversations
          </Typography>
          {conversations.length >= 1 ? conversations.map((x) => <MessageSender chat={x.chats} isBuyer={x.isBuyer} />) : <Typography variant="h5">No messages yet</Typography>}
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          {isSelected && (
            <>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Link to={selected.isBuyer ? `/profile/${selected.chats.seller._id}` : `/profile/${selected.chats.buyer._id}`}>
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <Avatar src={selected.isBuyer ? selected.chats.seller.avatar : selected.chats.buyer.avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={selected.isBuyer ? selected.chats.seller.name : selected.chats.buyer.name} />
                  </ListItem>
                </Link>
              </Box>
              {alertShow && (
                <Alert variant="success" onClose={handleAlertClose} dismissible>
                  <p>{alert}</p>
                </Alert>
              )}
              <Box>
                {selected.chats.conversation.map((x) => (
                  <Paper key={x._id} elevation={3} sx={{ p: 2, mb: 1, bgcolor: selected.myId === x.senderId ? "primary.main" : "secondary.main" }}>
                    <Typography>{x.message}</Typography>
                  </Paper>
                ))}
              </Box>
              <Box component="form" onSubmit={handleMsgSubmit} display="flex" alignItems="center">
                <TextField fullWidth multiline required value={message} onChange={(e) => setMessage(e.target.value)} sx={{ mr: 1 }} />
                <Button type="submit" variant="contained" color="secondary">
                  Send
                </Button>
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Messages;
