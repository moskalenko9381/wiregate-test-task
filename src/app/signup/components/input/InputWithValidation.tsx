import React from "react";
import "../../style/text.scss";

export interface IInputProps {
    id?: string;
    type?: string;
    label: string;
    default?: string;
    iconPath?: string;
    children?: React.ReactElement | React.ReactElement[];

    onChange(e: string): void;

    value?: string;
    pattern?: string;
    className?: string;
}

export const InputWithValidation = (props: IInputProps) => {
    return (
        <div className="flex-column-block input-valid-wrapper">
            <label htmlFor="input-valid" className="input-label">
                {props.label}{" "}
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                    className={props.className + " input-valid"}
                    type={props.type}
                    pattern={props.pattern}
                    placeholder={props.default}
                    style={{ width: "100%" }}
                    onChange={(e) => props.onChange(e.target.value.trim())}
                    id={props.id}
                    value={props.value}
                    required
                />
                {props.children}
            </div>
        </div>
    );
};
