import express from "express";
import {
    createProduct,
    getAllProduct, 
    getProductById,
    updateProductById,
    deleteProductById
} from "../controller/Product.controller";

const router = express.Router();

router.get("/", getAllProduct);
router.post("/create", createProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);

export default router;