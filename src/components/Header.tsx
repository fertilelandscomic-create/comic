import { Link } from "react-router";
import Logo from "../assets/ui/fertile-lands-logo.png";

export default function Header() {

    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="Fertile Lands" />
            </Link>
            <nav className="bg-accent border-y border-secondary ">
                <ul className="flex gap-4 py-2 px-6 justify-end">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/cast">Cast</Link></li>
                    <li><Link to="/archive">Archive</Link></li>
                </ul>
            </nav>
        </header>
    );
}