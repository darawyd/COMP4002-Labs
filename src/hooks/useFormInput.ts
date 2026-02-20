import { useState } from "react";

export type ValidateFn<T> = (value: T) => string | null;

export type UseFormInputReturn<T> = {
    value: T;
    setValue: (v: T) => void;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => void;

    message: string;
    setMessage: (m: string) => void;
    clearMessage: () => void;

    validate: (fn: ValidateFn<T>) => boolean;
};

export default function useFormInput<T extends string>(
    initialValue: T,
): UseFormInputReturn<T> {
    const [value, setValue] = useState<T>(initialValue);
    const [message, setMessage] = useState("");

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setValue(e.target.value as T);
        setMessage("");
    };

    const clearMessage = () => setMessage("");

    const validate = (fn: ValidateFn<T>) => {
        const result = fn(value);
        if (result) {
            setMessage(result);
            return false;
        }
        setMessage("");
        return true;
    };

    return {
        value,
        setValue,
        onChange,
        message,
        setMessage,
        clearMessage,
        validate,
    };
}
