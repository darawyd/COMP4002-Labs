import type { Role } from "../types";

const API = "http://localhost:3000/api/organization";

export const organizationRepo = {
    async getAll(): Promise<Role[]> {
        const res = await fetch(API);
        return res.json();
    },

    async add(record: Role) {
        const res = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(record),
        });

        return res.json();
    },
};
