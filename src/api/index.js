import axios from "axios";

const url = "http://localhost:8000/products";

async function getSingleProduct(id) {
  return axios.get(`${url}/${id}`);
}

export { getSingleProduct };
