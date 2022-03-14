import { Router } from "express";

import { createSpecificationController } from "../cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
  createSpecificationController.handle(req, res);
});

export { specificationsRoutes };
