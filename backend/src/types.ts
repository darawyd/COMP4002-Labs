export interface Employee {
    firstName: string;
    lastName?: string | null;
}

export interface Department {
    name: string;
    employees: Employee[];
}

export interface Role {
    firstName: string;
    lastName: string;
    role: string;
}
