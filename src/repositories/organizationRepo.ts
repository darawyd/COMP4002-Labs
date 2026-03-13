import { roles } from "../data/roles";
import type { Role } from "../types";

const STORAGE_KEY = "organization";

export const organizationRepo = {
    getAll(): Role[] {
        const data = localStorage.getItem(STORAGE_KEY);

        if (!data) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(roles));
            return roles;
        }

        return JSON.parse(data);
    },

    add(record: Role): void {
        const records = this.getAll();
        records.push(record);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    },

    roleExists(role: string): boolean {
        return this.getAll().some((r) => r.role === role);
    },
};
