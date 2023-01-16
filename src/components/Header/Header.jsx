
import { Navigation, NavList, NavItem, NavStyledLink } from './Header.styled'


const headerItems = [
    { href: "/", title: "Home" },
    { href: "/movies", title: "Movies" }
]

export const Header = () => {
    return (
        <Navigation>
            <NavList>
                {headerItems.map(({ href, title }) => (
                    <NavItem key={title}>
                        <NavStyledLink to={href}>{title}</NavStyledLink>
                    </NavItem>
                ))}
            </NavList>
        </Navigation>
    )
}