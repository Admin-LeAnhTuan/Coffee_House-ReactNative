import { Request, Response } from "express";
import Category from "./../model/Category.model";

// Create a new category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newCategory = new Category(data);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Get all category
export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const categorys = await Category.find({ isDelete: false }).exec();
    if (categorys) {
      res.json(categorys);
    } else {
      res.status(404).json({ error: "Products not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get products" });
  }
};

// Get category by ID
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const category = await Category.findById(id)
      .populate({ path: "products", options: { strictPopulate: false } })
      .exec();
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
};

// Update category by ID
export const updateCategoryById = async (req: Request, res: Response) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).exec();
    if (updatedCategory) {
      res.json(updatedCategory);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

// Delete category by ID
export const deleteCategoryById = async (req: Request, res: Response) => {
  try {
    const deletedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { isDelete: true },
      { new: true } // Thêm option { new: true } để trả về sản phẩm đã được cập nhật
    ).exec();

    if (deletedCategory) {
      res.json(deletedCategory);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};

module.exports = {
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
