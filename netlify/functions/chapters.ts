import { getAllPosts } from "../utilities/api"

export default async () => {
    const posts = await getAllPosts();
    const chapters = posts.data;

    if (!chapters.length) {
        return Response.json({ error: "No posts found" }, { status: 404 });
    }

    return Response.json(chapters);
}