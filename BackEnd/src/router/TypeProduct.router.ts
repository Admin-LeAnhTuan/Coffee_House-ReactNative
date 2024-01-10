import express from "express";
import {
    createTypeProduct,
    getAllTypeProduct,
    getTypeProductById,
    updateTypeProductById,
    deleteTypeProductById,
} from "../controller/TypeProduct.controller";

const router = express.Router();

router.get("/", getAllTypeProduct);
router.post("/create", createTypeProduct);
router.get("/:id", getTypeProductById);
router.put("/:id", updateTypeProductById);
router.delete("/:id", deleteTypeProductById);

export default router;