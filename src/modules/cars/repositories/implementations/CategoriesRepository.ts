import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private categoriesRepository: Repository<Category>;

  constructor() {
    this.categoriesRepository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.categoriesRepository.create({ name, description });
    await this.categoriesRepository.save(category);
  }

  async listAll(): Promise<Category[]> {
    return this.categoriesRepository.find();
  }

  async findByName(name: string): Promise<Category> {
    return this.categoriesRepository.findOne({ name });
  }
}
