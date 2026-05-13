import { Link, NavLink, useLocation } from "react-router";
import Logo from "../assets/ui/fertile-lands-logo.png";
import KofiIcon from "../assets/ui/kofi-icon.svg";

export default function Header() {
    const location = useLocation();

    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="Fertile Lands" />
            </Link>
            <nav className="bg-accent border-y border-secondary ">
                <ul className="
                    flex gap-4 py-2 px-6 justify-end text-xl 
                    [&>li]:hover:scale-105 [&>li]:hover:transition-transform 
                    [&_.active]:text-tertiary [&_.active]:font-bold
                ">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive || location.pathname.startsWith("/comic") ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/cast">Cast</NavLink></li>
                    <li><NavLink to="/archive">Archive</NavLink></li>
                    <li><Link to="https://ko-fi.com/fertile_lands" target="_blank" rel="noopener noreferrer">
                        <img className="h-8" src={KofiIcon} alt="Ko-fi" />
                    </Link></li>
                </ul>
            </nav>
        </header>
    );
}