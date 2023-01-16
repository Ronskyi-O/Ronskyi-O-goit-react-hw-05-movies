import { useState } from "react"
import { useEffect } from "react"
import { getTrendingMovies } from "../../api/moviesApi"

import { Container, Title, MoviesList, Movie, NavItem } from "./Home.styled"

export const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        getTrendingMovies().then(setTrendingMovies)
    }, [])

    // console.log(trendingMovies);
    return (
        <Container>
            <Title>Tranding this week</Title>
            <MoviesList>
                {trendingMovies.map(({ id, title }) => (
                    <Movie key={id}>
                        <NavItem to={`/movies/${id}`}>{title}</NavItem>
                    </Movie>
                ))}
            </MoviesList>
        </Container>
    )
}