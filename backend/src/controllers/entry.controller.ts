import { Request, Response } from "express";
import { EntryService } from "../services";

export const createEntry = async (req: Request, res: Response) => {
    try {
        await EntryService.createEntry();
        res.status(201).send("Entry created");
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};

export const getEntry = async (req: Request, res: Response) => {
    try {
        const entryId = req.params.id;
        const entry = await EntryService.getEntry(entryId);
        res.json(entry);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};

export const getAllEntry = async (req: Request, res: Response) => {
    try {
        const entryList = await EntryService.getAllEntry();
        res.status(201).json(entryList);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};

export const updateEntry = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { entryTime, exitStatus, exitTime } = req.body;
        await EntryService.updateEntry(id, entryTime, exitStatus, exitTime);
        res.send("Entry updated");
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};

export const deleteEntry = async (req: Request, res: Response) => {
    try {
        const entryId = req.params.id;
        await EntryService.deleteEntry(entryId);
        res.send("Entry deleted");
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};

export async function visitorEnter(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await EntryService.visitorEnter(id);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

export async function visitorExit(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await EntryService.visitorEnter(id);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}
