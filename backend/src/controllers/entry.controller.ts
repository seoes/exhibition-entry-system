import { Request, Response } from "express";
import { EntryService } from "../services";

export const createEntry = async (req: Request, res: Response) => {
    try {
        const entryData = req.body;
        await EntryService.createEntry(entryData);
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

export const updateEntry = async (req: Request, res: Response) => {
    try {
        const entryId = req.params.id;
        const entryData = req.body;
        await EntryService.updateEntry(entryId, entryData);
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

export const updateExitStatus = async (req: Request, res: Response) => {
    try {
        const entryId = req.params.id;
        const exitData = req.body;
        await EntryService.updateExitStatus(entryId, exitData);
        res.send("Exit status updated");
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};
