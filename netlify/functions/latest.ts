import { getAllPosts, getPostById } from "../utilities/api";

export default async () => {
  const posts = await getAllPosts();
  const chapters = posts.data.reverse();

  if (!chapters.length) {
    return Response.json({ error: "No posts found" }, { status: 404 });
  }

  const chapterCount = chapters.length;
  const latestPostId = chapters[chapterCount - 1].id;
  const latestPost = await getPostById(latestPostId);

  const imageCount = latestPost.data.images.length;
  const latestPage = latestPost.data.images[imageCount - 1];

  let previous_page: { page_number: number; chapter_number: number } | null = null;

  if (imageCount > 1) {
    previous_page = {
      page_number: imageCount - 1,
      chapter_number: chapterCount,
    };
  } else if (chapterCount > 1) {
    previous_page = {
      page_number: -1,
      chapter_number: chapterCount - 1,
    };
  }

  const page = {
    id: latestPage.id,
    description: latestPage.description,
    page_number: imageCount,
    total_pages: imageCount,
    chapter_number: chapterCount,
    total_chapters: chapterCount,
    image_url: latestPage.link,
    next_page: null,
    previous_page,
  };

  return Response.json(page);
};