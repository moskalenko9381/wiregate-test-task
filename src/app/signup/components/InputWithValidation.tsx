import React from "react";
import "../style/text.scss"

export interface IInputProps {
    type?: string;
    label: string;
    default?: string;
}
export const InputWithValidation = (props: IInputProps) => {
    return (
        <div style={{gap: "0.8em", display: "flex",
            flexDirection: "column", flexGrow: 1, minWidth: "200px"}}>
            <label htmlFor="mobile" id="mobile-label">
                {props.label} </label>
            <input id="mobile" type={props.type} placeholder={props.default}
                   style={{width: "100%"}}/>
        </div>
    );
}