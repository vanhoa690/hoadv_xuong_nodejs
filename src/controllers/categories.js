import Category from "../models/CategoryModel.js";

class CategoriesController {
  // GET /categories
  async getAllCategories(req, res) {
    try {
      const categories = await Category.find();
      res.status(200).json({
        message: "Get All Categories Done",
        data: categories,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // GET /categories/:id
  async getCategoryDetail(req, res) {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({
          message: "Category Not Found",
        });
      }
      res.status(200).json({
        message: "Get Category Detail Done",
        data: category,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // POST /categories
  async createCategory(req, res) {
    const newCategory = await Category.create(req.body);
    res.status(201).json({
      message: "Create Category Successfull",
      data: newCategory,
    });
  }
  // PUT /categories/:id
  async updateCategory(req, res) {
    try {
      const categoryUpdate = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (!categoryUpdate) {
        return res.status(404).json({
          message: "Category Not Found",
        });
      }
      res.status(200).json({
        message: "Update Category Successfull",
        data: updateCategory,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // DELETE /categories/:id
  async deleteCategory(req, res) {
    try {
      const category = await Category.findByIdAndDelete(req.params.id);
      if (!category) {
        return res.status(404).json({
          message: "Category Not Found",
        });
      }
      res.status(200).json({
        message: "Delete Category Done",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default CategoriesController;
