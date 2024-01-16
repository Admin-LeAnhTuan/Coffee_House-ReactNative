import { Request, Response } from "express";
import Order from './../model/Order.model';
import DetailOrder from "../model/DetailOrder.model"
import User from "../model/User.model"
import Product from "../model/Product.model"

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Get all order 
export const getAllOrder = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    res.status(500).json({ error: "Failed to get orders" });
  }
}

// Get order by ID
export const getOrderById = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    res.status(500).json({ error: "Failed to get order" });
  }
};

// Update order by ID
export const updateOrderById = async (req: Request, res: Response) => {
    try {
      
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  };

// Delete order by ID
export const deleteOrderById = async (req: Request, res: Response) => {
    try {
      
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