import { Link } from "react-router";
import NotFound from "../assets/layout/404.png";



export default function TechnicalDifficulttiesPage() {
    return (
        <>
            <main className="text-center">
                <img src={NotFound} alt="404 - Not Found" className="max-w-4/5 w-80 mx-auto mt-10" />
                    <h1 className="text-4xl">Oops, we broke it...</h1>
                    <p className="mt-4 px-8">Meanwhile, you can visit our <Link to="https://fertilelands.thecomicseries.com" className="text-blue-500 underline">ComicFury</Link> page.</p>
            </main>
        </>
    );
}