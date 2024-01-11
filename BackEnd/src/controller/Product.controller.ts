import { Request, Response } from "express";
import Product from '../model/Product.model';
import Category from "../model/Category.model"
import TypeProduct, { TypeProductDocument } from "../model/TypeProduct.model";
import Topping from "../model/Topping.model";

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
  try {
      
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

// Get all product 
export const getAllProduct = async (req: Request, res: Response) => {
  try {
  

  
  } catch (error) {
    res.status(500).json({ error: "Failed to get products" });
  }
}

// Get product by ID
export const getProductById = async (req: Request, res: Response) => {
  try {

  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
};

// Update product by ID
export const updateProductById = async (req: Request, res: Response) => {
    try {
    
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  };

// Delete user by ID
export const deleteProductById = async (req: Request, res: Response) => {
    try {
    
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  };

module.exports = {
    createProduct,
    getAllProduct, 
    getProductById,
    updateProductById,
    deleteProductById
}