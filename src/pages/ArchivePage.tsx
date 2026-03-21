import { useLoaderData } from "react-router";
import Header from "../components/Header";
import ChapterContainer from "../components/ChapterContainer";
import Footer from "../components/Footer";

export default function ArchivePage() {

    const chapters = useLoaderData();

    type Chapter = {
        id: string;
        title: string;
        number: number;
        description: string;
        thumbnail: string;
    };

    return (
        <>
            <Header />
            <main className="p-4 flex flex-col gap-4">
                {chapters.map((chapter: Chapter) => (
                    <ChapterContainer
                        key={chapter.id}
                        title={`Chapter ${chapter.number}: ${chapter.title}`}
                        thumbnail={chapter.thumbnail}
                        id={chapter.id}
                        number={chapter.number}
                    />
                ))}
            </main>
            <Footer />
        </>
    );
}