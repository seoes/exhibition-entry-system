import { Router } from "express";
import { VisitorController } from "../controllers";

export function visitorRoutes(): Router {
    const router = Router();

    router.post("/visitor", VisitorController.createVisitor);
    router.get("/visitor/:id", VisitorController.getVisitor);
    router.put("/visitor/:id", VisitorController.updateVisitor);
    router.delete("/visitor/:id", VisitorController.deleteVisitor);

    return router;
}
