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
  try {
    const { id } = req.params;
    const product = await Store.findOne({ _id: id });

    if (!product) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `There is no product with id ${id}` });
    }

    res.status(StatusCodes.OK).json({ product });
  } catch (e) {
    res.StatusCodes(StatusCodes.BAD_REQUEST).json({ message: e.message });
  }
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
  try {
    const { id } = req.params;
    const editProduct = await Store.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(StatusCodes.OK).json({ product: editProduct });
  } catch (e) {
    console.log(e);
  }
}

async function deleteProduct(req, res) {
  try {
  } catch (error) {}
}

export {
  getAllProducts,
  createProduct,
  getSingleProduct,
  editProduct,
  deleteProduct,
};
