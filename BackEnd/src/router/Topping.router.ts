import express from "express";
import {
    createTopping,
    getAllTopping, 
    getToppingById,
    updateToppingById,
    deleteToppingById
} from "../controller/Topping.controller";
import { upload } from "../utils/Multer.utils";

const router = express.Router();

router.get("/", getAllTopping);
router.post("/create",upload.single("image"), createTopping);
router.get("/:id", getToppingById);
router.put("/:id", updateToppingById);
router.delete("/:id", deleteToppingById);

export default router;