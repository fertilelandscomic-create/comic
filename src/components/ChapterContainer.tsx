import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

export default function ChapterContainer({ title, thumbnail, id, number }: { title: string, thumbnail: string, id: string, number: number, children?: React.ReactNode }) {

    const [pages, setPages] = useState<{ id: string, thumbnail: string }[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const detailsRef = useRef<HTMLDetailsElement>(null);

    useEffect(() => {

        if (!isOpen || pages.length > 0) return

        fetch(`/api/chapter/${id}`)
            .then(response => response.json())
            .then(data => setPages(data.pages))
            .catch(error => console.error("Error fetching chapter pages:", error));

    }, [isOpen, pages.length, id]);

    const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const details = detailsRef.current;
        if (!details) return;

        if (details.open) {
            // Closing: start animation, then remove open attribute after transition
            setIsAnimating(false);
            const content = details.querySelector<HTMLDivElement>("[data-content]");
            if (content) {
                const onEnd = () => {
                    details.open = false;
                    setIsOpen(false);
                    content.removeEventListener("transitionend", onEnd);
                };
                content.addEventListener("transitionend", onEnd);
            }
        } else {
            // Opening: set open attribute, then trigger animation on next frame
            details.open = true;
            setIsOpen(true);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsAnimating(true);
                });
            });
        }
    };

    return (
        <details
            ref={detailsRef}
            className="chapter-card border border-secondary font-heading text-5xl overflow-hidden [&:open>summary]:border-b bg-accent max-w-3xl mx-auto"
        >
            <summary
                className="relative flex bg-black items-center border-secondary cursor-pointer"
                onClick={handleToggle}
            >
                <img src={thumbnail} alt={title} className="w-35 border-r border-secondary" />
                <p className="
                    p-8 text-tertiary text-[clamp(1.5rem,5vw,3rem)]
                    drop-shadow-[1px_0_.3px_var(--color-secondary),-1px_0_.3px_var(--color-secondary),0_1px_.3px_var(--color-secondary),0_-1px_.3px_var(--color-secondary),1px_1px_.3px_var(--color-secondary),-1px_1px_.3px_var(--color-secondary),1px_-1px_.3px_var(--color-secondary),-1px_-1px_.3px_var(--color-secondary)]
                ">{title}</p>
            </summary>

            <div
                data-content
                className={`grid transition-[grid-template-rows] duration-300 delay-200 ease-in-out ${isAnimating ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
                <div className="overflow-hidden">
                    {pages.length > 0 && (
                        <div className="p-4 grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4">
                            {pages.map((page: { id: string, thumbnail: string }, index: number) => (
                                <Link to={`/comic/${number}/${index + 1}`} key={page.id} className="border border-black relative block bg-white w-full hover:scale-110 transition-transform">
                                    <img src={page.thumbnail} alt={`Page ${index + 1}`} className="w-full" />
                                    <p className="p-1 flex justify-center items-center font-default text-sm font-bold text-white absolute top-0 right-0 aspect-square w-8 bg-black">{index + 1}</p>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </details>
    );
}