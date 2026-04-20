import Header from "../components/Header";
import PageNavigation from "../components/PageNavigation";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import type { PageDetails } from "../types/PageDetails";
import { useLocation, useNavigate, useParams } from "react-router";
import Spinner from "../assets/ui/spinner3.gif";


export default function ComicPage() {

    const path = useLocation().pathname.split("/")[2];
    const { chapter, page } = useParams();
    const [pageDetails, setPageDetails] = useState({} as PageDetails);

    const navigate = useNavigate();

    useEffect(() => {

        async function fetchData() {

            setPageDetails({} as PageDetails);

            fetch(`/api/${path === "first" || path === "latest" ? path : `${chapter}/${page}`}`)
                .then((response) => response.ok ? response.json() : Promise.reject(new Error("Failed to fetch page details")))
                .then((data) => setPageDetails(data))
                .catch(() => navigate("/comic/latest", { replace: true }));
        }
        fetchData();

    }, [chapter, page, path, navigate]);

    return (
        <>
            <Header />
            <main>
                <div className="bg-white aspect-1080/1627 max-w-2xl w-full flex justify-center items-center mx-auto m-4 drop-shadow-md relative">
                    <img src={Spinner} alt="Loading..." className="absolute -z-10  w-4/5 max-w-40" />
                    <img key={pageDetails.image_url} className="opacity-0 transition-opacity duration-500" src={pageDetails.image_url} alt="" onLoad={event => event.currentTarget.style.opacity = "1"} />
                </div>
                <PageNavigation page={pageDetails} />
                {pageDetails.description && <p className="bg-white m-4 max-w-2xl mx-auto p-4">{pageDetails.description}</p>}
            </main>

            <Footer />
        </>
    );
}