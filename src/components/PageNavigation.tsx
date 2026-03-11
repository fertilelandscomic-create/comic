import PreviousArrow from '../assets/ui/navigation/nav_previous.png';
import NextArrow from '../assets/ui/navigation/nav_next.png';
import FirstArrow from '../assets/ui/navigation/nav_first.png';
import LastArrow from '../assets/ui/navigation/nav_last.png';

export default function PageNavigation({ currentPage }: { currentPage: number }) {

    return (
        <nav className="flex gap-4 sticky bottom-2">
            <ul className='flex mx-auto p-4 max-w-3xs'>
                <li><a href="/comic/first"><img src={FirstArrow} alt="First page" /></a></li>
                <li><a href={`/comic/${currentPage - 1}`}><img src={PreviousArrow} alt="Previous page" /></a></li>
                <li><a href={`/comic/${currentPage + 1}`}><img src={NextArrow} alt="Next page" /></a></li>
                <li><a href="/comic/latest"><img src={LastArrow} alt="Latest page" /></a></li>
            </ul>
        </nav>
    );
}