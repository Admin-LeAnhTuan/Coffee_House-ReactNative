import express from "express";
import {
    createProduct,
    getAllProduct, 
    getProductById,
    updateProductById,
    deleteProductById
} from "../controller/Product.controller";
import { upload } from "../utils/Multer.utils";

const router = express.Router();

router.get("/", getAllProduct);
router.post("/create", upload.single("image"), createProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);

export default router;