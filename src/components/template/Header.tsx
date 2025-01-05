import Navbar from "../Navbar";
import Logo from "./Logo";


export default function Header() {
    return (
        <header className="flex justify-between items-center p-2 w-5/6 mx-auto h-20 boxed">
            <Logo />
            <Navbar/>
        </header>
    )
}