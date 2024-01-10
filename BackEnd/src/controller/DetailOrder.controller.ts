import { Request, Response } from "express";
import DetailOrder from './../model/DetailOrder.model';

// Create a new detailOrder
export const createDetailOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newDetailOrder = new DetailOrder(data);
    await newDetailOrder.save();
    res.status(201).json(newDetailOrder);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Get all detailOrder 
export const getAllDetailOrder = async (req: Request, res: Response) => {
  try {
    const detailOrders = await DetailOrder.findOne({isdelete: false})
    .exec();
    if (detailOrders) {
      res.json(detailOrders);
    } else {
      res.status(404).json({ error: "Products not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get products" });
  }
}

// Get detailOrder by ID
export const getDetailOrderById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const detailOrder = await DetailOrder.findById(id).exec();
    if (detailOrder) {
      res.json(detailOrder);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
};

// Update detailOrder by ID
export const updateDetailOrderById = async (req: Request, res: Response) => {
    try {
      const updatedDetailOrder = await DetailOrder.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).exec();
      if (updatedDetailOrder) {
        res.json(updatedDetailOrder);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  };

// Delete detailOrder by ID
export const deleteDetailOrderById = async (req: Request, res: Response) => {
    try {
      const deletedDetailOrder = await DetailOrder.findByIdAndUpdate(
        req.params.id,
        { isdelete: true },
        { new: true } // Thêm option { new: true } để trả về sản phẩm đã được cập nhật
      ).exec();
      
      if (deletedDetailOrder) {
        res.json(deletedDetailOrder);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  };

module.exports = {
    createDetailOrder,
    getAllDetailOrder,
    getDetailOrderById,
    updateDetailOrderById,
    deleteDetailOrderById,
}