import { useState } from "react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getTrendingMovies } from "../../api/moviesApi"

import { Container, Title, MoviesList, Movie, NavItem } from "./Home.styled"

export const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    const location = useLocation()

    useEffect(() => {
        getTrendingMovies().then(setTrendingMovies)
    }, [])

    return (
        <Container>
            <Title>Tranding this week</Title>
            <MoviesList>
                {trendingMovies.map(({ id, title }) => (
                    <Movie key={id}>
                        <NavItem to={`/movies/${id}`} state={{ from: location }}>{title}</NavItem>
                    </Movie>
                ))}
            </MoviesList>
        </Container>
    )
}