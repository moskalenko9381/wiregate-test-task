"use client";
import { InputWithValidation } from "@/app/signup/components/input/InputWithValidation";
import React, { useMemo } from "react";
import "../../style/text.scss";

interface IProps {
    onChange(e: string): void;

    value?: string;
    errorMessage: string;
    defaultValue?: string;
    label?: string;
    pattern?: RegExp;
}

export const InputWithErrorMessage = (props: IProps) => {
    const { value, onChange, errorMessage, defaultValue, pattern, label } =
        props;

    const nameCorrect = useMemo(
        () => pattern && value && pattern.test(value),
        [value],
    );

    return (
        <div className="flex-column-block">
            <InputWithValidation
                label={label || defaultValue || ""}
                onChange={onChange}
                value={value}
                type="text"
                className={nameCorrect ? "" : "error-message"}
                default={defaultValue}
            >
                {nameCorrect ? (
                    <img className="span-icon" src={"/done.svg"} />
                ) : undefined}
            </InputWithValidation>
            {value && !nameCorrect ? (
                <p className="error-message"> {errorMessage} </p>
            ) : undefined}
        </div>
    );
};
