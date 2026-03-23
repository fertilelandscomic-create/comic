import Footer from "../components/Footer";
import Header from "../components/Header";
import NotFound from "../assets/layout/404.png";
import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <>
            <Header />
            <main className="text-center">
                <img src={NotFound} alt="404 - Not Found" className="max-w-4/5 w-80 mx-auto mt-10" />
                    <h1 className="text-4xl">Uh... Are we lost?</h1>
                    <p className="mt-4 px-8">Let's go back <Link to="/" className="text-blue-500 underline">home</Link>.</p>
            </main>
            <Footer />
        </>
    );
}