import express from "express";
import {
    createOrder,
    getAllOrder, 
    getOrderById,
    updateOrderById,
    deleteOrderById
} from "../controller/Order.controller";

const router = express.Router();

router.get("/", getAllOrder);
router.post("/create", createOrder);
router.get("/:id", getOrderById);
router.put("/:id", updateOrderById);
router.delete("/:id", deleteOrderById);

export default router;