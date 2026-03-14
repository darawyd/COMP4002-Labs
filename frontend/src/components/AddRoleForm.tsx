import useFormInput from "../hooks/useFormInput";
//import { organizationService } from "../services/organizationService";
import { organizationRepo } from "../repositories/organizationRepo";
import type { Role } from "../types";

type Props = {
    onSuccess: () => void;
};

export default function AddRoleForm({ onSuccess }: Props) {
    const firstName = useFormInput("");
    const lastName = useFormInput("");
    const role = useFormInput("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        firstName.clearMessage();
        role.clearMessage();

        if (firstName.value.trim().length < 3) {
            firstName.setMessage("First name must be at least 3 characters.");
            return;
        }

        if (!role.value.trim()) {
            role.setMessage("Role cannot be empty.");
            return;
        }

        const record: Role = {
            firstName: firstName.value,
            lastName: lastName.value,
            role: role.value,
        };

        try {
            await organizationRepo.add(record);

            firstName.setValue("");
            lastName.setValue("");
            role.setValue("");

            onSuccess();
        } catch (err) {
            console.error("Failed to add role:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Role</h3>

            <div>
                <label htmlFor="role-firstName">First Name</label>
                <input
                    id="role-firstName"
                    value={firstName.value}
                    onChange={firstName.onChange}
                />
                {firstName.message && <p>{firstName.message}</p>}
            </div>

            <div>
                <label htmlFor="role-lastName">Last Name</label>
                <input
                    id="role-lastName"
                    value={lastName.value}
                    onChange={lastName.onChange}
                />
            </div>

            <div>
                <label htmlFor="role-name">Role</label>
                <input
                    id="role-name"
                    value={role.value}
                    onChange={role.onChange}
                />
                {role.message && <p>{role.message}</p>}
            </div>

            <button type="submit">Add</button>
        </form>
    );
}
