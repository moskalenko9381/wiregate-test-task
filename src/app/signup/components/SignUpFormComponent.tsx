"use client";
import { ISignUpProps } from "@/app/type";
import { InputNamesContainer } from "@/app/signup/components/input/InputNamesContainer";
import { InputPhone } from "@/app/signup/components/input/InputPhone";
import { InputWithValidation } from "@/app/signup/components/input/InputWithValidation";
import { InputPassword } from "@/app/signup/components/input/InputPassword";
import React, { useEffect, useReducer, useState } from "react";
import "../style/text.scss";
import "../style/block.scss";
import "../style/button.scss";
import { signUpAction, signupReducer } from "@/app/signup/hooks/signupReducer";
import { NAME_REGEX, PHONE_REGEX } from "@/constants";
import { CompanyCheckbox } from "@/app/signup/components/checkbox/CompanyCheckbox";
import { SubmitButton } from "@/app/signup/components/button/SubmitButton";
import { AgreementCheckbox } from "@/app/signup/components/checkbox/AgreementCheckbox";

export function SignUpFormComponent(data: ISignUpProps) {
    const [state, dispatch] = useReducer(signupReducer, { ...data });
    const [activeSubmit, setActiveSubmit] = useState(false);
    const [agreement, setAgreement] = useState(false);

    useEffect(() => {
        setActiveSubmit(
            NAME_REGEX.test(state.name) &&
                NAME_REGEX.test(state.lastName) &&
                PHONE_REGEX.test(state.phone) &&
                state.company !== undefined &&
                state.password.length > 0 &&
                agreement,
        );
    }, [
        state.name,
        state.lastName,
        state.phone,
        state.company,
        state.password,
        agreement,
    ]);

    const handleAgreement = () => {
        setAgreement(!agreement);
    };
    return (
        <div className="main-block">
            <div className="flex-column-block">
                <span className="sign-up">Sign up </span>
                <span style={{ color: "#5B5B5B" }}>
                    {" "}
                    Please provide your name and email{" "}
                </span>
            </div>

            <div className="flex-column-block" style={{ gap: "1.2em" }}>
                <InputNamesContainer
                    name={state.name}
                    onChangeName={(val) => dispatch(signUpAction("name", val))}
                    lastName={state.lastName}
                    onChangeLastName={(val) =>
                        dispatch(signUpAction("surname", val))
                    }
                />

                <InputPhone
                    phone={state.phone}
                    setPhone={(val) => dispatch(signUpAction("phone", val))}
                />

                <CompanyCheckbox
                    value={state.company}
                    onChange={(e) => dispatch(signUpAction("company", e))}
                />

                {state.company && (
                    <InputWithValidation
                        label={"Address"}
                        value={state.address}
                        onChange={(val) =>
                            dispatch(signUpAction("address", val))
                        }
                        default="Enter your address company"
                    />
                )}

                <InputPassword
                    password={state.password}
                    setPassword={(val) =>
                        dispatch(signUpAction("password", val))
                    }
                />

                <AgreementCheckbox handleAgreement={handleAgreement} />

                <SubmitButton disabled={!activeSubmit} data={state} />
            </div>
        </div>
    );
}
