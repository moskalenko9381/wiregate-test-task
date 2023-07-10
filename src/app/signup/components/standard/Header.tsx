import React from "react";
import Image from "next/image";
import "../../style/text.scss";
import "../../style/block.scss";

const Header = () => {
    return (
        <div className="header">
            <Image src="/header.svg" alt="header-logo" height={56} width={56} />
            <div
                className="flex-column-block"
                style={{ textAlign: "center", gap: "13px", height: "100%" }}
            >
                <div className="flex-column-block">
                    <span id="work-time"> Work time </span>
                    <span id="hr"> HR management </span>
                </div>
            </div>
        </div>
    );
};
export default Header;
