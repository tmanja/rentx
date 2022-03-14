import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  categoriesRepository.create({ name, description });
  return res.status(201).end();
});

categoriesRoutes.get("/", (_req, res) => {
  const allCategories = categoriesRepository.listAll();
  return res.status(200).json(allCategories);
});

export { categoriesRoutes };