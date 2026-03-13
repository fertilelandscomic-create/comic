import { useParams } from "react-router";
import Header from "../components/Header";
import PageNavigation from "../components/PageNavigation";


export default function ComicPage() {

    const TOTAL_PAGES = 2; // Placeholder for total number of pages, should be dynamic in a real app

    const {id} = useParams() as {id: string};

    let pageId = id;


    if (id === "first") {
        pageId = "1";
    } else if (id === "latest"  || isNaN(Number(id)) || Number(id) < 1 || Number(id) > TOTAL_PAGES) {
        pageId = TOTAL_PAGES.toString();
    }


    return (
        <>
            <Header />
            <main>

                <img className="bg-white aspect-9/12 max-w-2xl w-full flex justify-center items-center mx-auto m-4 drop-shadow-md" src={`/pages/dummies/${pageId}.png`} alt={`Comic ${pageId}`} />
                <div className="bg-accent border-y border-secondary min-h-10" />

                <p className="bg-white m-4 max-w-2xl mx-auto p-4 shadow-md">Blah blah blah comic stuff</p>
            </main>
            <PageNavigation currentPage={Number(pageId)} />


        </>
    );
}