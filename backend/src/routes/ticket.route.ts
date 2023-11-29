import { Router } from "express";
import { TicketController } from "../controllers";

const router = Router();

router.post("/ticket/type", TicketController.createTicketType);
router.get("/ticket/type/:type", TicketController.getTicketType);
router.post("/ticket", TicketController.createTicket);
router.get("/ticket/:serialNumber", TicketController.getTicket);
router.put("/ticket/:serialNumber", TicketController.updateTicket);
router.delete("/ticket/:serialNumber", TicketController.deleteTicket);

export default router;
