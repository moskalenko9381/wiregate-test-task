import React from "react";
import "../../style/text.scss";
import { InputWithErrorMessage } from "@/app/signup/components/input/InputWithErrorMessage";
import {
    errorMessageLength,
    errorMessageLetters,
    NAME_REGEX,
} from "@/constants";

interface IInputNamesProps {
    name?: string;
    lastName?: string;

    onChangeName(val: string): void;

    onChangeLastName(val: string): void;
}

export const InputNamesContainer = (props: IInputNamesProps) => {
    const { name, lastName, onChangeName, onChangeLastName } = props;

    return (
        <div
            style={{
                display: "flex",
                gap: "1.3em",
                flexWrap: "wrap",
                position: "relative",
            }}
        >
            <InputWithErrorMessage
                pattern={NAME_REGEX}
                defaultValue="Your name"
                onChange={onChangeName}
                value={name}
                errorMessage={
                    name && name.length === 1
                        ? errorMessageLength
                        : errorMessageLetters
                }
            />

            <InputWithErrorMessage
                pattern={NAME_REGEX}
                defaultValue="Your last name"
                onChange={onChangeLastName}
                value={lastName}
                errorMessage={
                    lastName && lastName.length === 1
                        ? errorMessageLength
                        : errorMessageLetters
                }
            />
        </div>
    );
};
