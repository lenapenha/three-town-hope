import Image from "next/image";
import logo from "@/assets/page.png";

export default function BandBanner() {
    return (
        <section className="flex flex-col relative items-center text-white">
                <Image src={logo} alt="Logo" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                text-white text-2xl font-specialElite
                flex flex-col items-center">
                    <span>SPREADING HOPE</span>
                    <span>THROUGH WORSHIP</span>
                </div>
        </section>
        
    )
}