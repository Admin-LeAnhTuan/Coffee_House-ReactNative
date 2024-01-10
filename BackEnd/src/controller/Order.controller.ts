import { Request, Response } from "express";
import Order from './../model/Order.model';

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newOrder = new Order();
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
};

// Get all order 
export const getAllOrder = async (req: Request, res: Response) => {
  try {
    const orders = await Order.findOne({isdelete: false})
    .exec();
    if (orders) {
      res.json(orders);
    } else {
      res.status(404).json({ error: "Orders not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get orders" });
  }
}

// Get order by ID
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const order = await Order.findById(id).exec();
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get order" });
  }
};

// Update order by ID
export const updateOrderById = async (req: Request, res: Response) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).exec();
      if (updatedOrder) {
        res.json(updatedOrder);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  };

// Delete order by ID
export const deleteOrderById = async (req: Request, res: Response) => {
    try {
      const deleteOrder = await Order.findByIdAndUpdate(
        req.params.id,
        { isdelete: true },
        { new: true } // Thêm option { new: true } để trả về sản phẩm đã được cập nhật
      ).exec();
      
      if (deleteOrder) {
        res.json(deleteOrder);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  };

module.exports = {
    createOrder,
    getAllOrder,
    getOrderById,
    updateOrderById,
    deleteOrderById,
}