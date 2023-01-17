import { API_URL } from "./constants";

export async function getAll(page, category, query) {
  if (query !== "" && query !== undefined) {
    return (
      await fetch(`${API_URL}/products?page=${page}&search=${query}`, { credentials: "include" })
    ).json();
  } else if (category && category !== "all") {
    return (
      await fetch(`${API_URL}/products/${category}?page=${page}`, { credentials: "include" })
    ).json();
  } else {
    return (await fetch(`${API_URL}/products?page=${page}`, { credentials: "include" })).json();
  }
}

export async function getSpecific(id) {
  return (await fetch(`${API_URL}/products/specific/${id}`, { credentials: "include" })).json();
}

export async function getRandomProducts() {
  return (await fetch(`${API_URL}/random`)).json();
}

export async function createProduct(product) {
  return (
    await fetch(`${API_URL}/products/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(product),
    })
  ).json();
}

export async function editProduct(id, product) {
  return (
    await fetch(`${API_URL}/products/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(product),
    })
  ).json();
}

export async function activateSell(id) {
  return (await fetch(`${API_URL}/products/enable/${id}`)).json();
}

export async function archiveSell(id) {
  return (await fetch(`${API_URL}/products/archive/${id}`)).json();
}

export async function wishProduct(id) {
  return (await fetch(`${API_URL}/products/wish/${id}`, { credentials: "include" })).json();
}
