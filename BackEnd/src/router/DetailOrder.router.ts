import express from "express";
import {
    createDetailOrder,
    getAllDetailOrder, 
    getDetailOrderById,
    updateDetailOrderById,
    deleteDetailOrderById
} from "../controller/DetailOrder.controller";

const router = express.Router();

router.get("/", getAllDetailOrder);
router.post("/create", createDetailOrder);
router.get("/:id", getDetailOrderById);
router.put("/:id", updateDetailOrderById);
router.delete("/:id", deleteDetailOrderById);

export default router;