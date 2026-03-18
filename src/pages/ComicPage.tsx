import { useLoaderData } from "react-router";
import Header from "../components/Header";
import PageNavigation from "../components/PageNavigation";
import Footer from "../components/Footer";


export default function ComicPage() {

    const page = useLoaderData();

    return (
        <>
            <Header />
            <main>
                <img className="bg-black aspect-11/17 max-w-2xl w-full flex justify-center items-center mx-auto m-4 drop-shadow-md" src={page.image_url} alt="" />
                <PageNavigation currentPage={page} />
                <div className="bg-accent border-y border-secondary min-h-10" />
                {page.description && <p className="bg-white m-4 max-w-2xl mx-auto p-4">{page.description}</p>}
            </main>
            
            <Footer />
        </>
    );
}