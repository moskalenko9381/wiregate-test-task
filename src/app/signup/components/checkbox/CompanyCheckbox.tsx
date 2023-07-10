import React from "react";
import "../../style/text.scss";
import "../../style/block.scss";
import "../../style/button.scss";

interface ICompanyCheckboxProps {
    value: boolean;

    onChange(value: boolean): void;
}

export const CompanyCheckbox = (props: ICompanyCheckboxProps) => {
    const { value, onChange } = props;
    return (
        <div className="container flex-column-block" style={{ gap: "0.8em" }}>
            <span className="company"> Are you a company? </span>
            <form>
                <label htmlFor="yes" className="radio-inline input-label">
                    <input
                        id="yes"
                        type="radio"
                        value="company-yes"
                        checked={value}
                        name="is-company"
                        className="radio"
                        onChange={() => onChange(true)}
                    />
                    Yes
                </label>

                <label htmlFor="no" className="radio-inline input-label">
                    <input
                        id="no"
                        type="radio"
                        value="company-no"
                        checked={!value}
                        onChange={() => onChange(false)}
                        name="is-company"
                        className="radio"
                    />
                    No{" "}
                </label>
            </form>
        </div>
    );
};
