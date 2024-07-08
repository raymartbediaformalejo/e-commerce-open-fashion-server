import { Router } from "express";

import {
  createProduct,
  getProduct,
  getProducts,
  searchProduct,
} from "./products.controller.js";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.get("/search", searchProduct);
router.post("/products", createProduct);

export default router;
