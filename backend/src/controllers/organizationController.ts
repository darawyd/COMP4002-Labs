import type { Request, Response } from "express";
import { organizationService } from "../services/organizationService.js";

export const organizationController = {
    getAll(req: Request, res: Response) {
        res.json(organizationService.getAll());
    },

    create(req: Request, res: Response) {
        try {
            const result = organizationService.create(req.body);
            res.json(result);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    },
};
