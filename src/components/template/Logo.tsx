import Link from "next/link";
import Image from 'next/image';
import logo from "../images/3thlogo.png";

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex flex-row justify-self-start items-center cursor-pointer my-4">
                <Image src={logo} alt="Logo" width={80} height={80} className="rounded"/>
                <h1 className="p-2 font-bold">Three Town Hope</h1 >
            </div>
        </Link>
    )
}