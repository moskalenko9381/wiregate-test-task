import React, {KeyboardEventHandler} from "react";
import "../style/text.scss"

export interface IInputProps {
    id?: string;
    type?: string;
    label: string;
    default?: string;
    iconPath?: string;
    children?: React.ReactElement | React.ReactElement[];
    onChange?(e: React.ChangeEvent): void;
    value?: string;
    pattern?: string;
    onKeyDown?: KeyboardEventHandler;
    className?: string;
}
export const InputWithValidation = (props: IInputProps) => {
    return (
        <div style={{gap: "0.8em", display: "flex", position: "relative",
            flexDirection: "column", flexGrow: 1, minWidth: "200px"}}>
            <label htmlFor="mobile" id="mobile-label">
                {props.label} </label>
            <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <input className={props.className + " mobile"} type={props.type}
                   pattern={props.pattern}
                   placeholder={props.default}
                   style={{width: "100%"}}
                   onKeyDown={props.onKeyDown}
                   onChange={props.onChange}
                   id={props.id}
                   value={props.value}
                   required
           />
                {props.children}
            </div>

        </div>
    );
}