import useFormInput from "../hooks/useFormInput";
import { createOrganizationRecord } from "../services/organizationService";
import type { Role } from "../types";

type Props = {
    onSuccess: () => void;
};

export default function AddRoleForm({ onSuccess }: Props) {
    const firstName = useFormInput("");
    const lastName = useFormInput("");
    const role = useFormInput("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        firstName.clearMessage();
        role.clearMessage();

        const result = createOrganizationRecord({
            firstName: firstName.value,
            lastName: lastName.value,
            role: role.value,
        } as Role);

        if (!result.ok && result.field) {
            if (result.field === "firstName") {
                firstName.setMessage(result.message ?? "");
            }
            if (result.field === "role") {
                role.setMessage(result.message ?? "");
            }
            return;
        }

        firstName.setValue("");
        lastName.setValue("");
        role.setValue("");

        onSuccess();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Role</h3>

            <div>
                <label>First Name</label>
                <input value={firstName.value} onChange={firstName.onChange} />
                {firstName.message && <p>{firstName.message}</p>}
            </div>

            <div>
                <label>Last Name</label>
                <input value={lastName.value} onChange={lastName.onChange} />
            </div>

            <div>
                <label>Role</label>
                <input value={role.value} onChange={role.onChange} />
                {role.message && <p>{role.message}</p>}
            </div>

            <button type="submit">Add</button>
        </form>
    );
}
