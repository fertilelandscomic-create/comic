import { getAllPosts, getPostById } from "../utilities/api";

export default async () => {
  const posts = await getAllPosts();
  const chapters = posts.data.reverse();

  if (!chapters.length) {
    return Response.json({ error: "No posts found" }, { status: 404 });
  }

  const chapterCount = chapters.length;
  const firstPostId = chapters[0].id;
  const firstPost = await getPostById(firstPostId);

  const imageCount = firstPost.data.images.length;
  const firstPage = firstPost.data.images[0];

  let next_page: { page_number: number; chapter_number: number } | null = null;

  if (imageCount > 1) {
    next_page = {
      page_number: 2,
      chapter_number: 1,
    };
  } else if (chapterCount > 1) {
    next_page = {
      page_number: 1,
      chapter_number: 2,
    };
  }

  const page = {
    id: firstPage.id,
    description: firstPage.description,
    page_number: 1,
    total_pages: imageCount,
    chapter_number: 1,
    total_chapters: chapterCount,
    image_url: firstPage.link,
    next_page,
    previous_page: null,
  };

  return Response.json(page);
};