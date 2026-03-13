import { roles } from "../data/roles.js";
import type { Role } from "../types.js";

let store: Role[] = JSON.parse(JSON.stringify(roles));

export const organizationRepository = {
    getAll(): Role[] {
        return store;
    },

    roleExists(role: string): boolean {
        return store.some((r) => r.role === role);
    },

    add(record: Role): Role[] {
        store.push(record);
        return store;
    },
};
