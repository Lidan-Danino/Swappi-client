import { API_URL } from "./constants";

export async function registerUser(userData) {
  return (
    await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userData),
    })
  ).json();
}

export async function loginUser(userData) {
  return (
    await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userData),
    })
  ).json();
}

export async function getUser() {
  return await (await fetch(`${API_URL}/auth/getUser`, { credentials: "include" })).json();
}

export async function getUserActiveSells(id) {
  return (await fetch(`${API_URL}/products/sells/active/${id}`, { credentials: "include" })).json();
}

export async function getUserArchivedSells() {
  return (await fetch(`${API_URL}/products/sells/archived`, { credentials: "include" })).json();
}

export async function getUserWishlist() {
  return (
    await fetch(`${API_URL}/products/wishlist/getWishlist`, { credentials: "include" })
  ).json();
}

export async function editUserProfile(id, data) {
  return (
    await fetch(`${API_URL}/user/edit-profile/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
  ).json();
}

export async function getUserById(id) {
  return await (
    await fetch(`${API_URL}/user/getUserById/${id}`, { credentials: "include" })
  ).json();
}
