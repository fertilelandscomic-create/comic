import { Handler, HandlerEvent } from "@netlify/functions";
import { getAllPosts, getPostById } from "../utilities/api";

export const handler:Handler = async (event: HandlerEvent) => {
  const rawChapter = event.queryStringParameters?.chapter;
  const rawPage = event.queryStringParameters?.page;

  const chapterNumber =
    rawChapter !== null && Number(rawChapter) > 0 ? Number(rawChapter) : 1;
  const pageNumber =
    rawPage !== null && Number(rawPage) > 0 ? Number(rawPage) : 1;

  const posts = await getAllPosts();
  const chapters = posts.data;

  if (!chapters.length) {
    return { statusCode: 404, body: JSON.stringify({ error: "No posts found" }) };
  }

  const chapterCount = chapters.length;

  if (chapterNumber > chapterCount) {
    return { statusCode: 404, body: JSON.stringify({ error: "Chapter not found" }) };
  }

  const currentPostId = chapters[chapterNumber - 1].id;
  const currentPost = await getPostById(currentPostId);

  const imageCount = currentPost.data.images.length;

  if (pageNumber > imageCount) {
    return { statusCode: 404, body: JSON.stringify({ error: "Page not found" }) };
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

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(page),
  }
};