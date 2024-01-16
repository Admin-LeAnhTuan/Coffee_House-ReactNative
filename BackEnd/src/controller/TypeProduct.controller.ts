import { Request, Response } from "express";
import TypeProduct from '../model/TypeProduct.model';
import Product from "../model/Product.model";
import { getProductById } from "./Product.controller";

// Create a new typeProduct
export const createTypeProduct = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
    console.log(error)
  }
};

// Get all typeProduct 
export const getAllTypeProduct = async (req: Request, res: Response) => {
  try {

  } catch (error) {
    res.status(500).json({ error: "Failed to get products" });
  }
}

// Get typeProduct by ID
export const getTypeProductById = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
};

// Update typeProduct by ID
export const updateTypeProductById = async (req: Request, res: Response) => {
    try {
      
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  };

// Delete typeProduct by ID
export const deleteTypeProductById = async (req: Request, res: Response) => {
    try {
      
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  };

module.exports = {
    createTypeProduct,
    getAllTypeProduct,
    getTypeProductById,
    updateTypeProductById,
    deleteTypeProductById,
}