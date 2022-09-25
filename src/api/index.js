import axios from "axios";

const url = "http://localhost:8000/products";

async function getSingleProduct(id) {
  return axios.get(`${url}/${id}`);
}

async function getAllProducts() {
  return axios.get(`${url}`);
}

async function updateProduct(id, updatedData) {
  return axios.patch(`${url}/${id}`, updatedData);
}

export { getSingleProduct, getAllProducts, updateProduct };
