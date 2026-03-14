import { Router } from "express";
import { organizationController } from "../controllers/organizationController.js";

const router = Router();

router.get("/", organizationController.getAll);
router.post("/", organizationController.create);

export default router;
