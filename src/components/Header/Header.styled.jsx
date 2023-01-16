import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navigation = styled.nav`
    display: flex;
    background-color: #725757;
    padding: 25px;
     box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
            0px 2px 1px rgba(0, 0, 0, 0.2);
`

export const NavList = styled.ul`
    padding: 20px;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 40px;
`

export const NavItem = styled.li`
    font-size: 25px;
`

export const NavStyledLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    height: 100%;
    cursor: pointer;
    padding: 15px;

    &.active {
        color: black;
    }

    :hover:not(.active),
    :focus:not(.active) {
        color: black;
    }
`