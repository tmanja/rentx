import { Router } from "express";

import { CategoriesRepository } from "../cars/repositories/CategoriesRepository";
import { createCategoryController } from "../cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (_req, res) => {
  const allCategories = categoriesRepository.listAll();
  return res.status(200).json(allCategories);
});

export { categoriesRoutes };
