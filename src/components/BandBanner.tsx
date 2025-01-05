import Image from "next/image";
import logo from "./images/page.png";

export default function BandBanner() {
    return (
        <div className="flex relative">
            <Image src={logo} alt="Logo" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             text-white text-2xl font-specialElite
             flex flex-col items-center">
                <span>SPREADING HOPE</span>
                <span>THROUGH WORSHIP</span>
            </div>
        </div>
    )
}