import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
