import { Request, Response } from "express";
import Product from '../model/Product.model';
import Category from "../model/Category.model"
import {upload} from "../utils/Multer.utils"

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
  try {
      const data = req.body;
      if(req.file) {
        data.image = req.file?.filename;
      }

      // Create a new product instance
      const newProduct = new Product(data);
      // Save the new product to the database
      await newProduct.save();

      const categoryId = data.categoryId;
      // Find the category by ID and update it
      const category = await Category.findByIdAndUpdate(
        data.categoryId,
        { $push: { products: newProduct._id } },
        { new: true }
      );
      console.log(category)

      res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create product' });
  }
};

// Get all product 
export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.findOne({isdelete: false})
    .exec();
    if (products) {
      res.json(products);
    } else {
      res.status(404).json({ error: "Products not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get products" });
  }
}

// Get product by ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id).exec();
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
};

// Update product by ID
export const updateProductById = async (req: Request, res: Response) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).exec();
      if (updatedProduct) {
        res.json(updatedProduct);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  };

// Delete user by ID
export const deleteProductById = async (req: Request, res: Response) => {
    try {
      const deletedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { isdelete: true },
        { new: true } // Thêm option { new: true } để trả về sản phẩm đã được cập nhật
      ).exec();
      
      if (deletedProduct) {
        res.json(deletedProduct);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
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