import { Router } from "express";
import { EntryController } from "../controllers";

export const entry = Router();

entry.post("/", EntryController.createEntry);
entry.get("/:id", EntryController.getEntry);
entry.get("/", EntryController.getAllEntry);
entry.put("/:id", EntryController.updateEntry);
entry.delete("/:id", EntryController.deleteEntry);
entry.put("/enter/:id", EntryController.visitorEnter);
entry.put("/exit/:id", EntryController.visitorExit);
