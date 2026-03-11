import Logo from "../assets/ui/fertile-lands-logo.png";

export default function Header() {

    return (
        <header>
            <a href="/">
                <img src={Logo} alt="Fertile Lands" />
            </a>
            <nav className="bg-accent border-y border-secondary ">
                <ul className="flex gap-4 py-2 px-6 justify-end">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/cast">Cast</a></li>
                    <li><a href="/archive">Archive</a></li>
                </ul>
            </nav>
        </header>
    );
}