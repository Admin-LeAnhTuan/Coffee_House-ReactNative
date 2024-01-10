import express from "express";
import {
    createUser,
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById
} from "../controller/User.controller";

const router = express.Router();

router.get("/", getAllUser);
router.post("/create", createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;