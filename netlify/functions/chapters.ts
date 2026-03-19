import { getAllPosts } from "../utilities/api"

export default async () => {
    const posts = await getAllPosts();
    const chapters = posts.data;

    if (!chapters.length) {
        return Response.json({ error: "No posts found" }, { status: 404 });
    }

    return Response.json(chapters.map((chapter: { id: string, title: string, thumbnail: { link: string } }, index: number) => ({
        id: chapter.id,
        number: index + 1,
        title: chapter.title,
        thumbnail: chapter.thumbnail.link
    })));

}  