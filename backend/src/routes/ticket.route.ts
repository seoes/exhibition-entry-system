import { Router } from "express";
import { TicketController } from "../controllers";

export const ticket = Router();

ticket.post("/type", TicketController.createTicketType);
ticket.get("/type/:type", TicketController.getTicketType);
ticket.post("/", TicketController.createTicket);
ticket.get("/:serialNumber", TicketController.getTicket);
ticket.put("/:serialNumber", TicketController.updateTicket);
ticket.delete("/:serialNumber", TicketController.deleteTicket);
