import React from "react";
import * as dotenv from "dotenv";
import NoSSRWrapper from "@/app/NoSSRWrapper";
import { ISignUpProps } from "@/app/type";
import { SignUpFormComponent } from "@/app/signup/components/SignUpFormComponent";
import Footer from "@/app/signup/components/standard/Footer";

dotenv.config({ path: __dirname + "/.env" });
const enabledSSR = process.env.NEXT_SSR_ENABLED;

export default async function Home() {
    if (enabledSSR === "true") {
        const data: ISignUpProps = await getData();
        return (
            <>
                <SignUpFormComponent {...data} />
                <Footer />
            </>
        );
    }

    const data = getDataSync();
    return (
        <NoSSRWrapper>
            <SignUpFormComponent {...data} />
            <Footer />
        </NoSSRWrapper>
    );
}

async function getData(): Promise<ISignUpProps> {
    return getDataSync();
}

function getDataSync(): ISignUpProps {
    return {
        password: "",
        company: true,
        name: "",
        lastName: "",
        phone: "",
    };
}
