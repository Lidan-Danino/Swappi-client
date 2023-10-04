import { API_URL } from "./constants";

export async function getAll(page = 1, category = null, query = '') {
  let url = `${API_URL}/products?page=${page}`;

  if (query) {
    url += `&search=${query}`;
  } else if (category && category !== 'all') {
    url = `${API_URL}/products/${category}?page=${page}`;
  }

  try {
    const response = await fetch(url, { credentials: 'include' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function getCategoryNames() {
  try {
    const response = await fetch(`${API_URL}/products/categories/names`, { credentials: "include" });
    const data = await response.json();
    return data.categoryNames;
  } catch (error) {
    console.error("Error fetching category names:", error);
    throw error;
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
