import React from "react";;
import "./style/button.scss";
import Footer from "@/app/signup/components/Footer";
import {InputWithValidation} from "@/app/signup/components/InputWithValidation";

export default function Page() {
    return (
        <>
        <div style={{display: "flex",
        position: "relative",
            justifyContent: "center", margin: "auto",
            maxWidth: "30em", minWidth: "15em",
            flexDirection: "column", alignSelf: "center",
            justifySelf: "center",
            gap: "2.5em"}} >
            <div style={{display: "flex", justifyContent: "center",
            flexDirection: "column", textAlign: "center", gap: "0.6em"}} >
                <span style={{fontFamily: "Seravek", fontWeight: 500,
                fontSize: "32px", lineHeight: "39.26px"}}>
                    Sign up </span>
                <span style={{color: "#5B5B5B"}}> Please provide your name and email </span>
            </div>

            <div style={{gap: "20px", display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", gap: "1.3em",
                flexWrap: "wrap"}}>
                <InputWithValidation label="Your name" type="text" default={"Sergey"} />
                <InputWithValidation label="Your last name" type="text" default={"Your last name"}/>
            </div>

            <InputWithValidation label={"Mobile Number"} default={"+7(999)999-99-99"}/>

            <div className="container" style={{display: "flex", gap: "1.3em", flexDirection: "column"}}>
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

            <InputWithValidation label={"Password"} type="password" default={"Create password"} />

            <form>
                <div className="checkbox-wrapper">
                    <input
                        type="checkbox"
                        id="checkbox" />
                    <label htmlFor="checkbox">
                        I agree with all Terms and Conditions and  Privacy Policies.
                    </label>
                </div>
                    <button type="submit" className="submit-button">Next</button>
            </form>

            </div>
        </div>
            <Footer />
            </>
    )
}
