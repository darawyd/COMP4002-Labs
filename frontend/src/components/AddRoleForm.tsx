import useFormInput from "../hooks/useFormInput";
import { organizationService } from "../services/organizationService";

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

        const result = organizationService.create({
            firstName: firstName.value,
            lastName: lastName.value,
            role: role.value,
        });

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
