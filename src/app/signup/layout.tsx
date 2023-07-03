import React from "react";
import Header from "@/app/signup/components/Header";

export default function DashboardLayout({
                                            children, // will be a page or nested layout
                                        }: {
    children: React.ReactNode
}) {
    return (
        <div style={{minHeight: "100vh", background: "white", display: "flex",
        position: "relative", flexDirection: "column"}}>
            <Header />

            {children}
        </div>
    )
}