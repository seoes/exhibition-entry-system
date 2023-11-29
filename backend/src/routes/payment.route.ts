import { Router } from "express";
import { PaymentController } from "../controllers";

const router = Router();

router.post("/payment", PaymentController.createPayment);
router.get("/payment/:id", PaymentController.getPayment);
router.put("/payment/:id", PaymentController.updatePayment);
router.delete("/payment/:id", PaymentController.deletePayment);

export default router;
