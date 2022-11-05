import express from "express";
import {createProduct , deleteAll, deleteProduct, findAllProduct , findProduct } from "../controllers/product.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", findAllProduct);
router.get("/:id", findProduct);
router.delete("/:id" , deleteProduct)
router.delete("/" , deleteAll)

export default router;
