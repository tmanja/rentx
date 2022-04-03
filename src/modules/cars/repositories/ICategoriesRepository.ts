import { Category } from "../entities/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  listAll(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}
