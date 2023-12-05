import { Router } from "express";
import { VisitorController } from "../controllers";

export const visitor = Router();

visitor.post("/", VisitorController.createVisitor);
visitor.get("/", VisitorController.getAllVisitor);
visitor.get("/:id", VisitorController.getVisitor);
visitor.put("/:id", VisitorController.updateVisitor);
visitor.delete("/:id", VisitorController.deleteVisitor);
