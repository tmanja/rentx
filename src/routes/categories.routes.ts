import { Router } from "express";

import { CategoriesRepository } from "../cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });
  return res.status(201).end();
});

categoriesRoutes.get("/", (_req, res) => {
  const allCategories = categoriesRepository.listAll();
  return res.status(200).json(allCategories);
});

export { categoriesRoutes };
