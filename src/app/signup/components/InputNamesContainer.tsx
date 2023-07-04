"use client";
import {InputWithValidation} from "@/app/signup/components/InputWithValidation";
import React, {useState} from "react";

interface IInputNamesProps {
	name?: string;
	lastName?: string;
}
export const InputNamesContainer = (props: IInputNamesProps) => {
	const [name, setName] = useState(props.name);
	const [lastName, setLastName] = useState(props.lastName);

	const onChangeName = (e: React.ChangeEvent) => {
		setName(e.target.value.trim());
	}

	const onChangeLastName = (e: React.ChangeEvent) => {
		setLastName(e.target.value.trim());
	}

	const onKeyDown = (e: KeyboardEvent) => {
		console.log("!" + e.target.value + "!", e.key);
		// if (e.key !== "Backspace" && e.key !== "Shift" &&
		// 	!/^[a-zA-Z]+$/.test(e.target.value.trim() + e.key)) {
		// 	e.preventDefault();
		// 	return;
		// }
	}
	return (
		<div style={{display: "flex", gap: "1.3em",
			flexWrap: "wrap", position: "relative"}}>
			<InputWithValidation label="Your name"
								 onChange={onChangeName}
								 pattern="[A-Za-z]{1,32}"
								 value={name}
								 onKeyDown={onKeyDown}
								 type="text" default={"Sergey"}>
				{name && /^[a-zA-Z]+$/.test(name) ? <img className="span-icon"
					  src={"/done.svg"} /> : undefined}
			</InputWithValidation>

			<InputWithValidation label="Your last name" type="text"
								 value={lastName}
								 onChange={onChangeLastName}
								 default={"Your last name"} >
				{lastName && /^[a-zA-Z]+$/.test(lastName) ? <img className="span-icon"
												 src={"/done.svg"} /> : undefined}
			</InputWithValidation>
		</div>
	)
}