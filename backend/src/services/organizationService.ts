import { organizationRepository } from "../repositories/organizationRepository.js";
import type { Role } from "../types.js";

export const organizationService = {
    getAll() {
        return organizationRepository.getAll();
    },

    create(record: Role) {
        if (record.firstName.length < 3) {
            throw new Error("First name must be at least 3 characters");
        }

        if (organizationRepository.roleExists(record.role)) {
            throw new Error("Role already occupied");
        }

        return organizationRepository.add(record);
    },
};
