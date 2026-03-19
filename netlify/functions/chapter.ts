import { getPostById } from "../utilities/api"

export default async (request: Request) => {
    const url = new URL(request.url);

    const id = url.pathname.split("/").slice(-1)[0];

    const post = await getPostById(id);

    if (!post) {
        return Response.json({ error: "Post not found" }, { status: 404 });
    }

    const chapter = {
        id: post.data.id,
        title: post.data.title,
        pages: post.data.images.map((image: { id: string, description: string, link: string }) => ({
            id: image.id,
            description: image.description,
            url: image.link,
            thumbnail: image.link.replace(/(files\/)(.+)$/, "$1thumb/$2")
        }))
    };

    return Response.json(chapter);
}