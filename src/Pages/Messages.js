import { useState, useEffect, useCallback } from "react";
import { getUserConversations, sendMessage } from "../services/messagesData";
import { Container, Grid, TextField, Button, Alert } from "@mui/material";
import { Link } from "react-router-dom";

import "../components/Messages/Aside.css";
import "../components/Messages/Article.css";

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
    <div className="chat-connections" key={chat._id}>
      <Link onClick={() => setIsSelected(true)} to={`/messages/${chat._id}`}>
        {isBuyer ? (
          <>
            <img src={chat.seller.avatar} alt="user-avatar" className="user-avatar" />
            <span>{chat.seller.name}</span>
          </>
        ) : (
          <>
            <img src={chat.buyer.avatar} alt="user-avatar" className="user-avatar" />
            <span>{chat.buyer.name}</span>
          </>
        )}
      </Link>
    </div>
  );

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4}>
          <h3>Conversations</h3>
          {conversations.length >= 1 ? conversations.map((x) => <MessageSender chat={x.chats} isBuyer={x.isBuyer} />) : <h5>No messages yet</h5>}
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          {isSelected && (
            <>
              <div className="chat-selected-header">
                {selected.isBuyer ? (
                  <Link to={`/profile/${selected.chats.seller._id}`}>
                    <img src={selected.chats.seller.avatar} alt="user-avatar" className="user-avatar" />
                    <span>{selected.chats.seller.name}</span>
                  </Link>
                ) : (
                  <Link to={`/profile/${selected.chats.buyer._id}`}>
                    <img src={selected.chats.buyer.avatar} alt="user-avatar" className="user-avatar" />
                    <span>{selected.chats.buyer.name}</span>
                  </Link>
                )}
              </div>
              {alertShow && (
                <Alert variant="success" onClose={handleAlertClose} dismissible>
                  <p>{alert}</p>
                </Alert>
              )}
              <div className="chat-selected-body">
                {selected.chats.conversation.map((x) => (
                  <div className={selected.myId === x.senderId ? "me" : "not-me"} key={x._id}>
                    <span className="message">{x.message}</span>
                  </div>
                ))}
              </div>
              <div className="chat-selected-footer">
                <form onSubmit={handleMsgSubmit}>
                  <TextField fullWidth multiline required value={message} onChange={(e) => setMessage(e.target.value)} />
                  <Button type="submit" variant="contained" color="secondary">
                    Send
                  </Button>
                </form>
              </div>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Messages;
