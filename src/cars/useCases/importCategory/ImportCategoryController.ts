import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export class ImportCategoryController {
  constructor(private importCategoryUsecase: ImportCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    await this.importCategoryUsecase.execute(file);
    return response.end();
  }
}
