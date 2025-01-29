import Image from "next/image";
import logo from "@/assets/page.png";

export default function BandBanner() {
    return (
        <section id="banner" className="flex flex-col relative items-center text-white">
                <Image src={logo} alt="Logo" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                text-white font-specialElite
                flex flex-col items-center band-banner">
                    <h1>SPREADING HOPE</h1>
                    <h1>THROUGH WORSHIP</h1>
                </div>
        </section>
        
    )
}