import NextArrow from '../assets/ui/navigation/nav_next2.png';
import LastArrow from '../assets/ui/navigation/nav_last2.png';
import { Link } from 'react-router';


type PageDetails = {
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

export default function PageNavigation({ currentPage }: { currentPage: PageDetails }) {

    return (
        <nav className="flex gap-4 sticky bottom-2">
            <ul className='flex mx-auto p-4 max-w-md gap-1 [&>li]:hover:scale-105 [&>li]:hover:transition-transform [&_img]:transition-[filter]'>
                <li>
                    <Link to="/comic/first">
                        <img src={LastArrow} alt="First page" className={`scale-x-[-1] ${currentPage.previous_page === null ? 'grayscale' : ''}`} />
                    </Link>
                </li>
                <li>
                    <Link to={`/comic/${currentPage.previous_page !== null ? currentPage.previous_page.chapter_number + '/' + currentPage.previous_page.page_number : 'first'}`}>
                        <img src={NextArrow} alt="Previous page" className={`scale-x-[-1] ${currentPage.previous_page === null ? 'grayscale' : ''}`} />
                    </Link>
                </li>
                <li>
                    <Link to={`/comic/${currentPage.next_page !== null ? currentPage.next_page.chapter_number + '/' + currentPage.next_page.page_number : currentPage.chapter_number + '/' + (currentPage.page_number + 1)}`}>
                        <img src={NextArrow} alt="Next page" className={`${currentPage.next_page === null ? 'grayscale' : ''}`} />
                    </Link>
                </li>
                <li>
                    <Link to="/comic/latest">
                        <img src={LastArrow} alt="Latest page" className={`${currentPage.next_page === null ? 'grayscale' : ''}`} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}