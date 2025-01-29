import Navbar from "../Navbar";
import Logo from "./Logo";


export default function Header() {
    return (
        <header className="flex justify-between items-center header">
            <div className="flex flex-row justify-between items-center boxed">
                <Logo />
                <Navbar/>
            </div>
        </header>
    )
}