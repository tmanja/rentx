import { Router } from "express";

import { SpecificationsRepository } from "../cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationsRepository = SpecificationsRepository.getInstance();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );
  createSpecificationService.execute({ name, description });
  res.status(201).end();
});

export { specificationsRoutes };
