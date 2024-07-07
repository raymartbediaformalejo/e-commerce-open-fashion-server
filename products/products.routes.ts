import { Router } from "express";

import { createProduct, getProduct, getProducts } from "./products.controller";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProduct);

export default router;
