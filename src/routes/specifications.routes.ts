import { Router } from "express";

import { SpecificationsRepository } from "../cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );
  createSpecificationService.execute({ name, description });
  res.status(201).end();
});

export { specificationsRoutes };
