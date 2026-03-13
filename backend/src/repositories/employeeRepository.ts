let employees: any[] = [];

export const employeeRepo = {
    getAll() {
        return employees;
    },

    add(emp: any) {
        employees.push(emp);
    },
};
