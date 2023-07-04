"use client";
import {InputWithValidation} from "@/app/signup/components/InputWithValidation";
import React, {useState} from "react";
interface IPasswordProps {
	initial?: string;
}
export const InputPassword = (props: IPasswordProps) => {
	const [type, setType] = useState("password");
	const [password, setPassword] = useState(props.initial);
	const onVisibilityHandler = () => {
		const element = document.getElementById("password-input");
		if (!element) {
			return;
		}
		const newType = element.getAttribute("type") === "password" ? "text" : "password";
		setType(newType);

		element.setAttribute("type", newType);
	}

	const onChangeHandler = (e: React.ChangeEvent) => {
		console.log("Новый пароль:", e.target.getAttribute("value"));
		setPassword(e.target.getAttribute("value")!);
	}

	return (
		<InputWithValidation label={"Password"}
							 value={password}
							 id={"password-input"}
							 type={type}
							 onChange={onChangeHandler}
							 default={"Create password"}
		>
			{<img className="span-icon"
				  onClick={onVisibilityHandler}
				  src={type === "password" ? "/no-eye.svg" : "/eye.svg" }></img>}
		</InputWithValidation>
	)
}