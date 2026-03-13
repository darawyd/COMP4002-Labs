export function useFormHandler<T>(
    submitAction: (data: T) => {
        ok: boolean;
        field?: string;
        message?: string;
    },
) {
    function handleSubmit(
        e: React.FormEvent,
        data: T,
        setFieldError: (field: string, message: string) => void,
    ) {
        e.preventDefault();

        const result = submitAction(data);

        if (!result.ok && result.field) {
            setFieldError(result.field, result.message || "");
        }
    }

    return { handleSubmit };
}
