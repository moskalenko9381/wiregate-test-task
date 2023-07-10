import Link from "next/link";
import React from "react";
import { ISignUpProps } from "@/app/type";

interface ISubmitProps {
    disabled: boolean;
    data: ISignUpProps;
}

export const SubmitButton = (props: ISubmitProps) => {
    return (
        <Link href={"/signup/success"}>
            <button
                type="submit"
                disabled={props.disabled}
                onClick={(e) => {
                    if (props.disabled) {
                        e.stopPropagation();
                        return;
                    }
                    console.log(JSON.stringify(props.data, null, 4));
                }}
                className="submit-button"
            >
                Next
            </button>
        </Link>
    );
};
