import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";

const router = Router();

router.post("/specialty", SpecialtyController.createSpecialty);
router.get("/specialty", SpecialtyController.getAllSpecialties);
router.patch("/specialty/:id", SpecialtyController.updateSpecialty);
router.delete("/specialty/:id", SpecialtyController.deleteSpecialty);

export const SpecialtyRoutes = router;
