"use client";
import {InputWithValidation} from "@/app/signup/components/InputWithValidation";
import React, {useMemo, useState} from "react";
import "../style/text.scss";
import {InputWithErrorMessage} from "@/app/signup/components/InputWithErrorMessage";

interface IInputNamesProps {
    name?: string;
    lastName?: string;
}

export const InputNamesContainer = (props: IInputNamesProps) => {
    const [name, setName] = useState(props.name);
    const [lastName, setLastName] = useState(props.lastName);
    const errorMessage = "Please enter only letters";

    const onChangeName = (e: React.ChangeEvent) => {
        setName(e.target.value.trim());
    }

    const onChangeLastName = (e: React.ChangeEvent) => {
        setLastName(e.target.value.trim());
    }

    return (
        <div style={{
            display: "flex", gap: "1.3em",
            flexWrap: "wrap", position: "relative"
        }}>
            <InputWithErrorMessage pattern={/^[a-zA-Z]+$/} defaultValue="Your name" onChange={onChangeName} value={name} errorMessage={errorMessage} />
            <InputWithErrorMessage pattern={/^[a-zA-Z]+$/} defaultValue="Your last name" onChange={onChangeLastName} value={lastName} errorMessage={errorMessage} />
		</div>

)
}