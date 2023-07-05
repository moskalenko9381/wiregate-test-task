import React from "react";
import "./style/button.scss";
import Footer from "@/app/signup/components/Footer";
import {InputWithValidation} from "@/app/signup/components/InputWithValidation";
import "./style/block.scss";
import {InputPassword} from "@/app/signup/components/InputPassword";
import {GetServerSideProps} from "next";
import {InputNamesContainer} from "@/app/signup/components/InputNamesContainer";
import {InputPhone} from "@/app/signup/components/InputPhone";
import {InputWithErrorMessage} from "@/app/signup/components/InputWithErrorMessage";
import {configDotenv} from "dotenv";

interface ISignUpProps {
    password: string;
    name: string;
    lastName: string;
    phone: string;
    company: boolean;
    address?: string;
}

enum ActionKind {
    NAME = 'NAME',
    LAST_NAME = 'LAST_NAME',
    PASSWORD = 'PASSWORD'
}

// An interface for our actions
interface Action {
    type: ActionKind;
    payload: string;
}

// An interface for our state

// Our reducer function that uses a switch statement to handle our actions
function formReducer(state: ISignUpProps, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case ActionKind.NAME:
            return {
                ...state,
                name: payload
            };
        case ActionKind.LAST_NAME:
            return {
                ...state,
                lastName: payload
            };
        case ActionKind.PASSWORD:
            return {
                ...state,
                password: payload
            };
        default:
            return state;
    }
}

export default async function Page() {
    const data: ISignUpProps = await getData();
    //const [state, dispatch] = useReducer(formReducer, {...data});
    return (
        <>
        <div className={"main-block"} >
            <div style={{display: "flex", justifyContent: "center",
            flexDirection: "column", textAlign: "center", gap: "0.6em"}} >
                <span style={{fontFamily: "Seravek", fontWeight: 500,
                fontSize: "32px", lineHeight: "39.26px"}}>
                    Sign up </span>
                <span style={{color: "#5B5B5B"}}> Please provide your name and email </span>
            </div>

            <div style={{gap: "20px", display: "flex", flexDirection: "column"}}>
                <InputNamesContainer name={data.name} lastName={data.lastName} />

            <InputPhone initial={data.phone} />

            <div className={"container"} style={{
                display: "flex", gap: "1.3em", flexDirection: "column"}}>
                <span className="company"> Are you a company? </span>
                <form>
                    <label htmlFor="yes" className="radio-inline">
                        <input id="yes" type="radio" name="optradio" className="radio"/>
                        Yes
                    </label>

                    <label htmlFor="no" className="radio-inline">
                        <input id="no" type="radio" name="optradio" className="radio"/>
                        No </label>
                </form>
            </div>

            <InputWithValidation label={"Address"} default={"Enter your address company"} />
                <InputPassword initial={data.password}/>

                <div className="checkbox-wrapper">
                    <input
                        type="checkbox"
                        id="checkbox" />
                    <label htmlFor="checkbox" id="checkbox-label">
                        I agree with all
                        <span> Terms and Conditions </span>
                        and
                        <span> Privacy Policies. </span>
                    </label>
                </div>
                    <button type="submit" className="submit-button">Next</button>

            </div>
        </div>
            <Footer />
            </>
    )
}


async function getData(): Promise<ISignUpProps> {
    return {
        password: "12345",
        company: true,
        name: "Lisa",
        lastName: "Test",
        address: "Lenina street",
        phone: ""
    }
}