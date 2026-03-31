import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post(
  "/specialty",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  SpecialtyController.createSpecialty,
);
router.get("/specialty", SpecialtyController.getAllSpecialties);

router.patch(
  "/specialty/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  SpecialtyController.createSpecialty,
  SpecialtyController.updateSpecialty,
);
router.delete(
  "/specialty/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  SpecialtyController.createSpecialty,
  SpecialtyController.deleteSpecialty,
);

export const SpecialtyRoutes = router;
