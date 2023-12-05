import { Request, Response } from "express";
import { VisitorService } from "../services";

export const createVisitor = async (req: Request, res: Response) => {
    try {
        const { name, age, gender } = req.body;
        await VisitorService.createVisitor(name, age, gender);
        res.status(201).send("Visitor created");
    } catch (error: any) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
};

export const getAllVisitor = async (req: Request, res: Response) => {
    try {
        const visitorList = await VisitorService.getAllVisitor();
        res.status(201).json(visitorList);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
};

export const getVisitor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const visitor = await VisitorService.getVisitor(id);
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
        const { id } = req.params;
        const { name, age, gender } = req.body;
        await VisitorService.updateVisitor(id, name, age, gender);
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
        const { id } = req.params;
        await VisitorService.deleteVisitor(id);
        res.send("Visitor deleted");
    } catch (error: any) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
};
