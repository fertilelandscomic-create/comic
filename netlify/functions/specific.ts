import { getAllPosts, getPostById } from "../utilities/api";

export default async (request: Request) => {
  const url = new URL(request.url);

  const rawChapter = url.searchParams.get("chapter");
  const rawPage = url.searchParams.get("page");

  const chapterNumber =
    rawChapter !== null && Number(rawChapter) > 0 ? Number(rawChapter) : 1;
  const pageNumber =
    rawPage !== null && Number(rawPage) > 0 ? Number(rawPage) : 1;

  const posts = await getAllPosts();
  const chapters = posts.data;

  if (!chapters.length) {
    return Response.json({ error: "No posts found" }, { status: 404 });
  }

  const chapterCount = chapters.length;

  if (chapterNumber > chapterCount) {
    return Response.json({ error: "Chapter not found" }, { status: 404 });
  }

  const currentPostId = chapters[chapterNumber - 1].id;
  const currentPost = await getPostById(currentPostId);

  const imageCount = currentPost.data.images.length;

  if (pageNumber > imageCount) {
    return Response.json({ error: "Page not found" }, { status: 404 });
  }

  const currentPage = currentPost.data.images[pageNumber - 1];

  let previous_page: { page_number: number; chapter_number: number } | null = null;
  let next_page: { page_number: number; chapter_number: number } | null = null;

  if (pageNumber > 1) {
    previous_page = {
      page_number: pageNumber - 1,
      chapter_number: chapterNumber,
    };
  } else if (chapterNumber > 1) {
    const previousChapterId = chapters[chapterNumber - 2].id;
    const previousChapter = await getPostById(previousChapterId);

    previous_page = {
      page_number: previousChapter.data.images.length,
      chapter_number: chapterNumber - 1,
    };
  }

  if (pageNumber < imageCount) {
    next_page = {
      page_number: pageNumber + 1,
      chapter_number: chapterNumber,
    };
  } else if (chapterNumber < chapterCount) {
    next_page = {
      page_number: 1,
      chapter_number: chapterNumber + 1,
    };
  }

  console.log('Blah ', currentPage.description);

  const page = {
    id: currentPage.id,
    description: currentPage.description,
    page_number: pageNumber,
    total_pages: imageCount,
    chapter_number: chapterNumber,
    total_chapters: chapterCount,
    image_url: currentPage.link,
    next_page,
    previous_page,
  };

  return Response.json(page);
};