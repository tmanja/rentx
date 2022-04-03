import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export function makeImportCategoryController(): ImportCategoryController {
  const categoriesRepository = new CategoriesRepository();
  const importCategoryUsecase = new ImportCategoryUseCase(categoriesRepository);
  const importCategoryController = new ImportCategoryController(
    importCategoryUsecase
  );
  return importCategoryController;
}
