import { organizationRepository } from "../repositories/organizationRepository.js";
import type { Role } from "../types.js";

export const organizationService = {
    async getAll() {
        return organizationRepository.getAll();
    },

    async create(record: Role) {
        if (record.firstName.length < 3) {
            throw new Error("First name must be at least 3 characters");
        }

        if (await organizationRepository.roleExists(record.role)) {
            throw new Error("Role already occupied");
        }

        return organizationRepository.add(record);
    },
};
