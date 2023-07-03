// components/Navbar.tsx
import Link from "next/link";
import React from "react";
import Image from "next/image";
import "../style/text.scss";
const Header = () => {
    return (
        <div style={{display: "flex", alignItems: "center", padding: "36px",
        gap: "16px"}}>
            <Image src="/header.svg" alt="header-logo" height={56} width={56} />
            <div style={{display: "flex", textAlign: "center", flexDirection: "column", gap: "13px", height: "100%"}} >
                <div style={{display: "flex", flexDirection: "column"}}>
                <span id="work-time"> Work time </span>
                <span id="hr"> HR management </span>
                </div>
            </div>
        </div>
    );
};
export default Header;
