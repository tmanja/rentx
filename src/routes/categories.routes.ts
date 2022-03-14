import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../cars/useCases/createCategory";
import { importCategoryController } from "../cars/useCases/importCategory";
import { listCategoriesController } from "../cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post("/upload", upload.single("file"), async (req, res) => {
  await importCategoryController.handle(req, res);
});

export { categoriesRoutes };
