import Store from "../models/Store.js";
import { StatusCodes } from "http-status-codes";

async function getAllProducts(req, res) {
  try {
    const products = await Store.find({});
    res.status(StatusCodes.OK).json({ products });
  } catch (e) {
    console.log(e);
  }
}

async function getSingleProduct(req, res) {
  res.send("getSingleProduct");
}

async function createProduct(req, res) {
  try {
    const product = await Store.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
  } catch (e) {
    console.log(e);
  }
}

async function editProduct(req, res) {
  res.send("editProduct");
}

async function deleteProduct(req, res) {
  res.send("deleteProduct");
}

export {
  getAllProducts,
  createProduct,
  getSingleProduct,
  editProduct,
  deleteProduct,
};
