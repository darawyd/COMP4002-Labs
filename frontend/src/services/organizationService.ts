import type { Role } from "../types";
import { organizationRepo } from "../repositories/organizationRepo";

export type ServiceResult = {
    ok: boolean;
    field?: string;
    message?: string;
};

export const organizationService = {
    create(data: Role): ServiceResult {
        if (data.firstName.trim().length < 3) {
            return {
                ok: false,
                field: "firstName",
                message: "First name must be at least 3 characters.",
            };
        }

        if (organizationRepo.roleExists(data.role.trim())) {
            return {
                ok: false,
                field: "role",
                message: "This role is already occupied.",
            };
        }

        organizationRepo.add({
            firstName: data.firstName.trim(),
            lastName: data.lastName.trim(),
            role: data.role.trim(),
        });

        return { ok: true };
    },
};
