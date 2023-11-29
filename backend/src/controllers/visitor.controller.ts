import { Request, Response } from "express";
import { VisitorService } from "../services";

export const createVisitor = async (req: Request, res: Response) => {
    try {
        const visitorData = req.body;
        await VisitorService.createVisitor(visitorData);
        res.status(201).send("Visitor created");
    } catch (error: any) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
};

export const getVisitor = async (req: Request, res: Response) => {
    try {
        const visitorId = req.params.id;
        const visitor = await VisitorService.getVisitor(visitorId);
        res.json(visitor);
    } catch (error: any) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
};

export const updateVisitor = async (req: Request, res: Response) => {
    try {
        const visitorId = req.params.id;
        const visitorData = req.body;
        await VisitorService.updateVisitor(visitorId, visitorData);
        res.send("Visitor updated");
    } catch (error: any) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
};

export const deleteVisitor = async (req: Request, res: Response) => {
    try {
        const visitorId = req.params.id;
        await VisitorService.deleteVisitor(visitorId);
        res.send("Visitor deleted");
    } catch (error: any) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
};
