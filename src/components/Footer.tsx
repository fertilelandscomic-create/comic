import { Link } from "react-router"


export default function Footer() {
    return (
        <>
            <footer className="pb-4 text-xs text-secondary mt-auto">
                <div className="bg-accent border-y border-secondary min-h-10 my-4" />
                <div className="flex flex-col gap-2 items-center text-center text-sm text-secondary">
                    <p className="font-bold">This site is a member of Furries United.</p>
                    <div className="flex gap-4 justify-center text-sm [&>a]:hover:underline [&>a]:hover:text-tertiary">
                        <Link to="https://webri.ng/webring/fun/previous?via=https%3A%2F%2Ffertilelands.world" target="_blank" rel="noopener noreferrer">
                            Previous Site
                        </Link>
                        <Link to="https://webri.ng/webring/fun/random?via=https%3A%2F%2Ffertilelands.world" target="_blank" rel="noopener noreferrer">
                            Random Site
                        </Link>
                        <Link to="https://webri.ng/webring/fun/next?via=https%3A%2F%2Ffertilelands.world" target="_blank" rel="noopener noreferrer">
                            Next Site
                        </Link>
                    </div>
                </div>
                <small className="flex items-center justify-center font-bold my-3"><span className="text-[1rem]">&copy;</span> Copyright 2026 J. M. Beshears. All rights reserved.</small>
            </footer>
        </>
    );
}