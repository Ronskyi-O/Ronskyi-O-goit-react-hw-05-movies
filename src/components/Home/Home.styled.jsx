import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    margin-top: 30px;
    padding-left: 60px;
`

export const Title = styled.h2`
font-size: 35px;
    color: #725757;
`

export const MoviesList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 15px;
`

export const Movie = styled.li`
    font-size: 20px;
`

export const NavItem = styled(Link)`
    text-decoration: none;
    color: black;
    height: 100%;
    cursor: pointer;

    :hover,
    :focus {
        color:  #725757;
    }
`