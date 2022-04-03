import csvParse from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

export class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  readCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];
      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse();
      stream.pipe(parseFile);
      parseFile
        .on("data", (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          return resolve(categories);
        })
        .on("error", reject);
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.readCategories(file);
    categories.forEach(async ({ name, description }) => {
      const categoryAlreadyExists = await this.categoriesRepository.findByName(
        name
      );
      if (!categoryAlreadyExists) {
        await this.categoriesRepository.create({ name, description });
      }
    });
  }
}
