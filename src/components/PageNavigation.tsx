import NextArrow from '../assets/ui/navigation/nav_next2.png';
import LastArrow from '../assets/ui/navigation/nav_last2.png';
import { Link } from 'react-router';
import type { PageDetails } from '../types/PageDetails';

export default function PageNavigation({ page }: { page: PageDetails }) {

    return (
        <nav className="flex gap-4 sticky bottom-2">
            <ul className='flex mx-auto p-4 max-w-md gap-1 [&>li]:hover:scale-105 [&>li]:hover:transition-transform [&_img]:transition-[filter]'>
                <li>
                    <Link to="/comic/first" className={`${page?.previous_page === null ? 'grayscale pointer-events-none' : ''}`}>
                        <img src={LastArrow} alt="First page" className={`scale-x-[-1] ${page?.previous_page === null ? 'grayscale' : ''}`} />
                    </Link>
                </li>
                <li>
                    <Link to={`/comic/${page?.previous_page !== null ? page?.previous_page?.chapter_number + '/' + page?.previous_page?.page_number : 'first'}`} className={`${page?.previous_page === null ? 'grayscale pointer-events-none' : ''}`}>
                        <img src={NextArrow} alt="Previous page" className={`scale-x-[-1] ${page?.previous_page === null ? 'grayscale' : ''}`} />
                    </Link>
                </li>
                <li>
                    <Link to={`/comic/${page?.next_page !== null ? page?.next_page?.chapter_number + '/' + page?.next_page?.page_number : page?.chapter_number + '/' + (page?.page_number + 1)}`} className={`${page?.next_page === null ? 'grayscale pointer-events-none' : ''}`}>
                        <img src={NextArrow} alt="Next page" />
                    </Link>
                </li>
                <li>
                    <Link to="/comic/latest" className={`${page?.next_page === null ? 'grayscale pointer-events-none' : ''}`}>
                        <img src={LastArrow} alt="Latest page" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}