import { Request, Response } from "express";
import { EntryService, PaymentService, TicketService } from "../services";

export const createTicketType = async (req: Request, res: Response) => {
    try {
        const { type, price } = req.body;
        await TicketService.createTicketType(type, price);
        res.status(201).send("Ticket type created");
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};

export const getTicketType = async (req: Request, res: Response) => {
    try {
        const type = req.params.type;
        const ticketType = await TicketService.getTicketType(type);
        res.json(ticketType);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};

export const createTicket = async (req: Request, res: Response) => {
    try {
        const { visitorId, cardNumber, type } = req.body;
        const entryId = await EntryService.createEntry();
        console.log(req.body);
        const ticketSerialNumber = await TicketService.createTicket(entryId, type);
        await PaymentService.createPayment(visitorId, cardNumber, ticketSerialNumber);
        res.status(201).send("Ticket created");
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};

export const getTicket = async (req: Request, res: Response) => {
    try {
        const serialNumber = req.params.serialNumber;
        const ticket = await TicketService.getTicket(serialNumber);
        res.json(ticket);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};

export const updateTicket = async (req: Request, res: Response) => {
    try {
        const serialNumber = req.params.serialNumber;
        const ticketData = req.body;
        await TicketService.updateTicket(serialNumber, ticketData);
        res.send("Ticket updated");
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};

export const deleteTicket = async (req: Request, res: Response) => {
    try {
        const serialNumber = req.params.serialNumber;
        await TicketService.deleteTicket(serialNumber);
        res.send("Ticket deleted");
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};
