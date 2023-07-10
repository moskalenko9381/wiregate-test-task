import React from "react";

export const AgreementCheckbox = ({
    handleAgreement,
}: {
    handleAgreement(): void;
}) => {
    return (
        <div className="checkbox-wrapper">
            <input type="checkbox" onChange={handleAgreement} id="checkbox" />
            <div style={{ textAlign: "center" }}>
                <label htmlFor="checkbox" id="checkbox-label">
                    I agree with all
                    <span> Terms and Conditions </span>
                    and
                    <span> Privacy Policies. </span>
                </label>
            </div>
        </div>
    );
};
