import type { Role } from "../types";

const STORAGE_KEY = "organization";

export function getOrganization(): Role[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function addOrganizationRecord(record: Role): void {
    const records = getOrganization();
    records.push(record);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function roleExists(role: string): boolean {
    return getOrganization().some((r) => r.role === role);
}
