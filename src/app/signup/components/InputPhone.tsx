"use client";
import React, {useState} from "react";
import {InputWithErrorMessage} from "@/app/signup/components/InputWithErrorMessage";
interface IInputProps {
    initial?: string;
}
export const InputPhone = (props: IInputProps) => {
    const [phone, setPhone] = useState(props.initial);

    const onChangeHandler = (e: React.ChangeEvent) => {
        console.log("Новый номер:", e.target, e.target.getAttribute("value"));
        setPhone(e.target.getAttribute("value")!);
    }

    return (
    <InputWithErrorMessage onChange={onChangeHandler}
                           value={phone}
                           label={"Mobile phone"}
                           errorMessage={"Please enter the number in the format +7"}
    defaultValue={"+7(999)999-99-99"}/>
    )
}

// <InputWithErrorMessage pattern={/^[a-zA-Z]+$/} defaultValue="Your name"
//                        onChange={onChangeName} value={name}
//                        errorMessage={errorMessage} />