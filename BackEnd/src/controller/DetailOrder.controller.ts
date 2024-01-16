import { Request, Response } from "express";
import DetailOrder from './../model/DetailOrder.model';

// Create a new detailOrder
export const createDetailOrder = async (req: Request, res: Response) => {
  try {
   
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Get all detailOrder 
export const getAllDetailOrder = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    res.status(500).json({ error: "Failed to get products" });
  }
}

// Get detailOrder by ID
export const getDetailOrderById = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
};

// Update detailOrder by ID
export const updateDetailOrderById = async (req: Request, res: Response) => {
    try {
      
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  };

// Delete detailOrder by ID
export const deleteDetailOrderById = async (req: Request, res: Response) => {
    try {
      
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