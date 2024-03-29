"use client";
import { InputWithValidation } from "@/app/signup/components/input/InputWithValidation";
import React, { useState } from "react";
import Image from "next/image";
interface IPasswordProps {
    password?: string;

    setPassword(val: string): void;
}

export const InputPassword = (props: IPasswordProps) => {
    const [type, setType] = useState("password");
    const { password, setPassword } = props;
    const onVisibilityHandler = () => {
        const element = document.getElementById("password-input");
        if (!element) {
            return;
        }
        const newType =
            element.getAttribute("type") === "password" ? "text" : "password";
        setType(newType);

        element.setAttribute("type", newType);
    };

    return (
        <InputWithValidation
            label={"Password"}
            value={password}
            id={"password-input"}
            type={type}
            onChange={setPassword}
            default={"Create password"}
        >
            {
                <Image className="span-icon" src={type === "password" ? "/no-eye.svg" : "/eye.svg"}
                    alt="password" onClick={onVisibilityHandler} 
                    width={24} height={24} />
            }
        </InputWithValidation>
    );
};
