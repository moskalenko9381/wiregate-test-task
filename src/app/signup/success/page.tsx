import Image from "next/image";
import "../../style/block.scss";

export default function Page() {
    return (
        <div className="success-page">
            <Image src={"/logo.svg"} alt={"logo"} width={350} height={177} />
            <span id="thanks"> Thank you for registering! </span>
        </div>
    );
}
