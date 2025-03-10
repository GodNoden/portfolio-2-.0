import Link from "next/link";


const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            className='block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-white bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-transparent bg-clip-text'
        >
            {title}
        </Link>
    )
}

export default NavLink;