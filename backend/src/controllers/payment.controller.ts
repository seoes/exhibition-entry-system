import { Request, Response } from "express";
import { PaymentService } from "../services";

export const createPayment = async (req: Request, res: Response) => {
    try {
        const paymentData = req.body;
        // const paymentId = await PaymentService.createPayment(paymentData);
        // res.status(201).json({ paymentId });
    } catch (error: any) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
};

export const getPayment = async (req: Request, res: Response) => {
    try {
        const paymentId = req.params.id;
        const payment = await PaymentService.getPayment(paymentId);
        res.json(payment);
    } catch (error: any) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
};

export const updatePayment = async (req: Request, res: Response) => {
    try {
        const paymentId = req.params.id;
        const paymentData = req.body;
        await PaymentService.updatePayment(paymentId, paymentData);
        res.send("Payment updated");
    } catch (error: any) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
};

export const deletePayment = async (req: Request, res: Response) => {
    try {
        const paymentId = req.params.id;
        await PaymentService.deletePayment(paymentId);
        res.send("Payment deleted");
    } catch (error: any) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
};
