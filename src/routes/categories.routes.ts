import { Router } from "express";
import multer from "multer";

import { makeCreateCategoryController } from "../modules/cars/useCases/createCategory";
import { makeImportCategoryController } from "../modules/cars/useCases/importCategory";
import { makeListCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (req, res) => {
  const createCategoryController = makeCreateCategoryController();
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  const listCategoriesController = makeListCategoriesController();
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post("/upload", upload.single("file"), async (req, res) => {
  const importCategoryController = makeImportCategoryController();
  await importCategoryController.handle(req, res);
});

export { categoriesRoutes };
