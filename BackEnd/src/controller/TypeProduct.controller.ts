import { Request, Response } from "express";
import TypeProduct from '../model/TypeProduct.model';
import Product from "../model/Product.model";
import { getProductById } from "./Product.controller";

// Create a new typeProduct
export const createTypeProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const productId = data.productId;
    const product = await Product.findOne({ _id: productId });
    data.product = product;
    const newTypeProduct = new TypeProduct(data);
    await newTypeProduct.save();
    res.status(201).json(newTypeProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
    console.log(error)
  }
};

// Get all typeProduct 
export const getAllTypeProduct = async (req: Request, res: Response) => {
  try {
    const typeProducts = await TypeProduct.findOne({isdelete: false})
    .exec();
    if (typeProducts) {
      res.json(typeProducts);
    } else {
      res.status(404).json({ error: "Products not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get products" });
  }
}

// Get typeProduct by ID
export const getTypeProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const typeProduct = await TypeProduct.findById(id).populate({ path: "toppings",
    options: { strictPopulate: false },}).exec();
    if (typeProduct) {
      res.json(typeProduct);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
};

// Update typeProduct by ID
export const updateTypeProductById = async (req: Request, res: Response) => {
    try {
      const updatedTypeProduct = await TypeProduct.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).exec();
      if (updatedTypeProduct) {
        res.json(updatedTypeProduct);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  };

// Delete typeProduct by ID
export const deleteTypeProductById = async (req: Request, res: Response) => {
    try {
      const deletedTypeProduct = await TypeProduct.findByIdAndUpdate(
        req.params.id,
        { isdelete: true },
        { new: true } // Thêm option { new: true } để trả về sản phẩm đã được cập nhật
      ).exec();
      
      if (deletedTypeProduct) {
        res.json(deletedTypeProduct);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
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