import Image from "next/image";
import band from "@/assets/media/who-we-are.png";

export default function About() {
    return (
        <section id="about" className="flex flex-col h-auto min-h-60 items-center relative about">
            <div className="flex flex-col bg-black bg-opacity-50 p-4 h-auto items-center rounded-tl-3xl w-full">
                <div className="w-full pt-4 pb-2">
                    <h1 className="text-3xl font-special-elite ">Who we are</h1>
                </div>
                <div className="w-full">
                    <p>Three Town Hope is a group of four men, each called by God and gifted with exceptional musical talents. We live and serve in the Springfield, Ozark, and Nixa area, united by our passion for sharing the gospel through music and prayer.</p>
                </div>
                <div className="w-full pt-4 pb-2">
                    <h1 className="text-3xl font-special-elite ">Our Experience</h1>
                </div>
                <div className="w-full">
                    <p>With over 50 years of combined experience in music, Three Town Hope brings a rich depth of skill and understanding to every performance. Each member brings unique strengths and styles, blending together to create heartfelt, impactful worship music.</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row bg-black bg-opacity-50 p-4 h-auto items-center w-full">
                <div className="mx-auto">
                    <Image src={band} alt="Who we are" width={400} height={250} className="rounded" /> 
                </div>
                <div className="w-full sm:w-1/2">
                    <div className="w-full pt-4 pb-2">
                        <h1 className="text-3xl font-special-elite ">Our mission</h1>
                    </div>
                    At the core of Three Town Hope is a deep desire to glorify God and spread His message of hope and love. Our mission is twofold:
                    <ul>
                        <li>• To create positive, uplifting experiences that bring people closer to God.</li>
                        <li>• To connect with people through prayer and worship, pointing them to the truth of the gospel.</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row bg-black bg-opacity-50 p-4 h-auto items-center w-full">
                <div className="w-full sm:w-1/2">
                    <div className="w-full pt-4 pb-2">
                        <h1 className="text-3xl font-special-elite ">Our Goals</h1>
                    </div>
                    We strive to serve the kingdom of God by:
                    <ul>
                        <li>• Performing at church camps, where we can inspire and connect with the next generation of believers.</li>
                        <li>• Participating in outreach events, reaching people in diverse communities.</li>
                        <li>• Leading special worship services, creating powerful moments of connection with God.</li>
                        <li>• Sharing our music wherever we are called, from small gatherings to large events.</li>
                    </ul>
                </div>
                <div className="mx-auto">
                    <Image src={band} alt="Who we are" width={400} height={250} className="rounded" /> 
                </div>
            </div>
        </section>
    )
}