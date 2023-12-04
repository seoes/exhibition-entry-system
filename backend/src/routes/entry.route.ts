import { Router } from "express";
import { EntryController } from "../controllers";

export const entry = Router();

entry.post("/", EntryController.createEntry);
entry.get("/:id", EntryController.getEntry);
entry.put("/:id", EntryController.updateEntry);
entry.delete("/:id", EntryController.deleteEntry);
entry.put("/exit/:id", EntryController.updateExitStatus);
