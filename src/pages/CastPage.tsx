import Footer from "../components/Footer";
import Header from "../components/Header";
import PamImage from "../assets/cast/pam.png";
import VicImage from "../assets/cast/vic.png";

export default function CastPage() {

    return (
        <>
            <Header />
            <main className="max-w-2xl mx-auto m-4 flex flex-col text-center">
                <h1 className="text-tertiary drop-shadow-title font-heading text-5xl">Cast</h1>
                <figure className="flex items-center text-left">
                    <img src={PamImage} alt="Pam" className="w-full max-w-50" />
                    <figcaption className="bg-accent p-4 h-fit drop-shadow-md">
                        <h2 className="font-heading text-3xl">Pam</h2>

                        <p>A kind fae with a special talent for listening.<br />
                            She really likes bugs and knows a lot about them.</p>
                    </figcaption>
                </figure>

                <figure className="flex items-center text-left">
                    <figcaption className="bg-accent p-4 h-fit drop-shadow-md">
                        <h2 className="font-heading text-3xl">Vic</h2>

                        <p>A young garuda who thinks they know everything.<br />
                            Vic is earnest and has a demanding personality.</p>
                    </figcaption>
                    <img src={VicImage} alt="Vic" className="w-full max-w-50" />
                </figure>
            </main>
            <Footer />
        </>
    );
}