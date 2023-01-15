import { Link } from "react-router-dom"

import { Navigation, NavList } from './Header.styled'


const headerItems = [
    { href: "/", title: "Home" },
    { href: "/movies", title: "Movies" }
]

export const Header = () => {
    return (
        <Navigation>
            <NavList>
                {headerItems.map(({ href, title }) => (
                    <li key={title}>
                        <Link to={href}>{title}</Link>
                    </li>
                ))}
            </NavList>
        </Navigation>
    )
}