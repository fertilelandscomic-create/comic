import NextArrow from '../assets/ui/navigation/nav_next2.png';
import LastArrow from '../assets/ui/navigation/nav_last2.png';
import { Link } from 'react-router';

export default function PageNavigation({ currentPage }: { currentPage: number }) {

    return (
        <nav className="flex gap-4 sticky bottom-2">
            <ul className='flex mx-auto p-4 max-w-md gap-1 [&>li]:hover:scale-105 [&>li]:hover:transition-transform'>
                <li><Link to="/comic/first"><img src={LastArrow} alt="First page" className='scale-x-[-1]' /></Link></li>
                <li><Link to={`/comic/${currentPage - 1}`}><img src={NextArrow} alt="Previous page" className='scale-x-[-1]' /></Link></li>
                <li><Link to={`/comic/${currentPage + 1}`}><img src={NextArrow} alt="Next page" /></Link></li>
                <li><Link to="/comic/latest"><img src={LastArrow} alt="Latest page" /></Link></li>
            </ul>
        </nav>
    );
}