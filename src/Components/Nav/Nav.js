import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav>
            <ul className='flex flex-col'>
                <li className='bg-white text-blue-400 rounded-r-lg text-2xl m-1 shadow-xl'><Link to='/'>Home</Link></li>
                <li className='bg-white text-blue-400 rounded-r-lg text-2xl m-1 shadow-xl'><Link to='/saved'>Rainy Day</Link></li>
            </ul>
        </nav>
    )
}