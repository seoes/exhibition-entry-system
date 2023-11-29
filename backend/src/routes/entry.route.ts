import { Router } from "express";
import { EntryController } from "../controllers";

const router = Router();

router.post("/entry", EntryController.createEntry);
router.get("/entry/:id", EntryController.getEntry);
router.put("/entry/:id", EntryController.updateEntry);
router.delete("/entry/:id", EntryController.deleteEntry);
router.put("/entry/exit/:id", EntryController.updateExitStatus);

export default router;
