import {
  getAllProducts,
  createProduct,
  getSingleProduct,
  editProduct,
  deleteProduct,
} from "../controllers/index.js";
import { Router } from "express";

const router = Router();

router.route("/").post(createProduct).get(getAllProducts);
router
  .route("/:id")
  .get(getSingleProduct)
  .patch(editProduct)
  .delete(deleteProduct);

export default router;
