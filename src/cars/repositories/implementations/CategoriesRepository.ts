import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category(name, description);
    this.categories.push(category);
  }

  listAll(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    return this.categories.find((category) => category.name === name);
  }
}
