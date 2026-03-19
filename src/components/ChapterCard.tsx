export default function ChapterCard({ title, thumbnail, description }: { title: string, thumbnail: string, description: string }) {

    return (
        <details className="chapter-card border border-secondary">
            <summary className="relative flex bg-accent">
                <img src={thumbnail} alt={title} className="border-l border-secondary" />
                <p>{title}</p>
                <p>{description}</p>
            </summary>

        </details>
    );
}