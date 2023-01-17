import { API_URL } from "./constants";

export async function createChatRoom(receiver, message) {
  return (
    await fetch(`${API_URL}/messages/createChatRoom`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ message: message, receiver: receiver }),
    })
  ).json();
}

export async function getUserConversations() {
  return (
    await fetch(`${API_URL}/messages/getUserConversations`, { credentials: "include" })
  ).json();
}

export async function sendMessage(chatId, message) {
  return (
    await fetch(`${API_URL}/messages/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ chatId, message }),
    })
  ).json();
}
