import { Link, NavLink, useLocation } from "react-router";
import Logo from "../assets/ui/fertile-lands-logo.png";
import KofiIcon from "../assets/ui/kofi-icon.svg";
import ComicFuryIcon from "../assets/ui/comic-fury-icon.png";


export default function Header() {
    const location = useLocation();

    return (
        <header className="flex y-4 x-full flex-col" >
            <Link to="/" className="flex justify-centerr gap-2 p-4">
                <img src={Logo} alt="Fertile Lands" />
            </Link>
            <nav className="bg-accent border-y border-secondary flex justify-center md:justify-end">
                <ul className="flex gap-4 py-2 justify-center md:justify-end text-xl mx-4 md:mr-16
                    [&>li]:hover:scale-105 [&>li]:hover:transition-transform 
                    [&_.active]:text-tertiary [&_.active]:font-bold
                ">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive || location.pathname.startsWith("/comic") ? "active" : ""}>Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/cast">Cast</NavLink></li>
                    <li><NavLink to="/archive">Archive</NavLink></li>
                    
                    <li className="border-l border-secondary"></li>
                    
                    <li className=""><Link to="https://ko-fi.com/fertile_lands" target="_blank" rel="noopener noreferrer">
                        <img className="w-8 h-8" src={KofiIcon} alt="Ko-fi" />
                    </Link></li>
                    <li>
                        <Link to="https://comicfury.com/read/fertilelands/comics/2994419" target="_blank" rel="noopener noreferrer">
                            <img className="w-8 h-8" src={ComicFuryIcon} alt="Comic Fury" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}