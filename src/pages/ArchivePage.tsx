import { useLoaderData } from "react-router";
import Header from "../components/Header";
import ChapterCard from "../components/ChapterCard";

export default function ArchivePage() {

    const chapters = useLoaderData();

    console.log(chapters);


    return (
        <>
            <Header />
            <h1>Archive</h1>

            {chapters.map((chapter: { id: string; title: string; description: string; thumbnail: { link: string };  }, index: number) => (
                <ChapterCard
                    key={chapter.id}
                    title={chapter.title || 'Untitled Chapter'}
                    thumbnail={chapter.thumbnail.link}
                    description={`Chapter ${index + 1}`}
                />
            ))}
        </>
    );
}