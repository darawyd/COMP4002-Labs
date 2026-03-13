import type { Request, Response } from "express";
import { employeeService } from "../services/employeeService.js";

export const employeeController = {
    getDepartments(req: Request, res: Response) {
        res.json(employeeService.getDepartments());
    },

    createEmployee(req: Request, res: Response) {
        try {
            const { department, employee } = req.body;

            const result = employeeService.createEmployee(department, employee);

            res.json(result);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    },
};
