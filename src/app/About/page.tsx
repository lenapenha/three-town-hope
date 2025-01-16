import Image from "next/image";
import band from "@/assets/media/who-we-are.png";

export default function About() {
    return (
        <section id="about" className="flex flex-col h-auto min-h-60 items-center relative about">
            <div className="flex flex-row bg-black bg-opacity-50 p-4 h-auto items-center rounded-tl-3xl">
                <div className="mx-auto">
                    <Image src={band} alt="Who we are" width={400} height={250} className="rounded" /> 
                </div>
                <div className=" w-1/2">
                    <div className="w-full pb-4">
                        <h1 className="text-3xl font-special-elite ">Who we are</h1>
                    </div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam purus mauris, rutrum dignissim finibus eu, cursus ac lorem. Fusce euismod urna non nisl efficitur, a semper lacus eleifend. Maecenas accumsan ipsum sit amet tellus dignissim, eget venenatis tortor egestas. Morbi dapibus sem non lectus maximus tempor. Morbi tempor dui vel commodo pretium.
                </div>
            </div>
            <div className="flex flex-row bg-black bg-opacity-50 p-4 h-auto items-center">
                <div className=" w-1/2">
                    <div className="w-full pb-4">
                        <h1 className="text-3xl font-special-elite ">Our mission</h1>
                    </div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam purus mauris, rutrum dignissim finibus eu, cursus ac lorem. Fusce euismod urna non nisl efficitur, a semper lacus eleifend. Maecenas accumsan ipsum sit amet tellus dignissim, eget venenatis tortor egestas. Morbi dapibus sem non lectus maximus tempor. Morbi tempor dui vel commodo pretium.
                </div>
                <div className="mx-auto">
                    <Image src={band} alt="Who we are" width={400} height={250} className="rounded" /> 
                </div>
            </div>
        </section>
    )
}