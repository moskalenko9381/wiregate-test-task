import Image from "next/image";

export default function Page() {
    return (
        <div
            style={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                paddingBottom: "5.3em",
                paddingLeft: "0.8em",
                margin: "auto",
            }}
        >
            <Image src={"/logo.svg"} alt={"logo"} width={350} height={177} />
            <span id="thanks"> Thank you for registering! </span>
        </div>
    );
}
