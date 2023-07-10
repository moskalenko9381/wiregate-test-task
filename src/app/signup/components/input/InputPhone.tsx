import React from "react";
import { InputWithErrorMessage } from "@/app/signup/components/input/InputWithErrorMessage";
import { PHONE_REGEX } from "@/constants";

interface IInputProps {
    phone?: string;

    setPhone(val: string): void;
}

export const InputPhone = (props: IInputProps) => {
    const { phone, setPhone } = props;

    return (
        <InputWithErrorMessage
            onChange={setPhone}
            pattern={PHONE_REGEX}
            value={phone}
            label={"Mobile Number"}
            errorMessage={"Please enter the number in the format +7"}
            defaultValue={"+7(999)999-99-99"}
        />
    );
};
