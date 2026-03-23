export type PageDetails = {
    id: string;
    description: string | null;
    page_number: number;
    total_pages: number;
    chapter_number: number;
    total_chapters: number;
    image_url: string;
    next_page: { page_number: number; chapter_number: number } | null;
    previous_page: { page_number: number; chapter_number: number } | null;
};
