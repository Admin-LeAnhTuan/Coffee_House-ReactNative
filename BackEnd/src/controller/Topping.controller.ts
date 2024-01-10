import { Request, Response } from "express";
import Topping from './../model/Topping.model';

// Create a new topping
export const createTopping = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newTopping = new Topping(data);
    await newTopping.save();
    res.status(201).json(newTopping);
  } catch (error) {
    res.status(500).json({ error: "Failed to create topping" });
  }
};

// Get all topping
export const getAllTopping = async (req: Request, res: Response) => {
  try {
    const toppings = await Topping.findOne({isdelete: false})
    .exec();
    if (toppings) {
      res.json(toppings);
    } else {
      res.status(404).json({ error: "Toppings not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get toppings" });
  }
}

// Get topping by ID
export const getToppingById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const topping = await Topping.findById(id).exec();
    if (topping) {
      res.json(topping);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
};

// Update topping by ID
export const updateToppingById = async (req: Request, res: Response) => {
    try {
      const updatedTopping = await Topping.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).exec();
      if (updatedTopping) {
        res.json(updatedTopping);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  };

// Delete topping by ID
export const deleteToppingById = async (req: Request, res: Response) => {
    try {
      const deletedTopping = await Topping.findByIdAndUpdate(
        req.params.id,
        { isdelete: true },
        { new: true } // Thêm option { new: true } để trả về sản phẩm đã được cập nhật
      ).exec();
      
      if (deletedTopping) {
        res.json(deletedTopping);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  };

module.exports = {
    createTopping,
    getAllTopping, 
    getToppingById,
    updateToppingById,
    deleteToppingById
}