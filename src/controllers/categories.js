import Category from "../models/CategoryModel.js";

class CategoriesController {
  async getAllCategories(req, res) {
    try {
      const categoryList = await Category.find();
      res.status(200).json({
        message: "Get Done",
        data: categoryList,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async getCategoryDetail(req, res) {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({
          message: "Not Found",
        });
      }
      res.status(200).json({
        message: "Get Done",
        data: category,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async creatCategory(req, res) {
    try {
      const category = await Category.create(req.body);
      res.status(200).json({
        message: "Create Done",
        data: category,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async updateCategory(req, res) {
    try {
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (!category) {
        return res.status(404).json({
          message: "Not Found",
        });
      }
      res.status(200).json({
        message: "Update Done",
        data: category,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async deleteCategory(req, res) {
    try {
      const category = await Category.findByIdAndDelete(req.params.id);
      if (!category) {
        return res.status(404).json({
          message: "Not Found",
        });
      }
      res.status(200).json({
        message: "Delete Done",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default CategoriesController;
