import { Router } from "express";
import { PaymentController } from "../controllers";

export const payment = Router();

payment.post("/", PaymentController.createPayment);
payment.get("/:id", PaymentController.getPayment);
payment.put("/:id", PaymentController.updatePayment);
payment.delete("/:id", PaymentController.deletePayment);
