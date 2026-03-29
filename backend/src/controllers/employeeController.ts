import type { Request, Response } from "express";
import { employeeService } from "../services/employeeService.js";

export const employeeController = {
    async getDepartments(_req: Request, res: Response) {
        try {
            const data = await employeeService.getDepartments();
            res.json(data);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    },

    async createEmployee(req: Request, res: Response) {
        try {
            const { department, employee } = req.body;

            const result = await employeeService.createEmployee(
                department,
                employee,
            );

            res.json(result);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    },
};
