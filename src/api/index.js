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

async function deleteProduct(id) {
  return axios.delete(`${url}/${id}`);
}

async function createProduct(data) {
  return axios.post(`${url}`, data);
}

export {
  createProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
