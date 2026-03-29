import type { Request, Response } from "express";
import { organizationService } from "../services/organizationService.js";

export const organizationController = {
    async getAll(req: Request, res: Response) {
        try {
            const data = await organizationService.getAll();
            res.json(data);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    },

    async create(req: Request, res: Response) {
        try {
            const result = await organizationService.create(req.body);
            res.json(result);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    },
};
