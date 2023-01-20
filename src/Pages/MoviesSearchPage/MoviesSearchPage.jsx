import { MoviesSearch } from "components/Movies/MoviesSearc/MoviesSearc"
import { useState, useEffect } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import { getMoviesByName } from "../../api/moviesApi"

import { Container, MoviesList, Movie, NavItem } from "./MoviesSearchPage.styled"


const MoviesSearchPage = () => {
    const [movies, setMovies] = useState([])
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query") ?? ""
    const location = useLocation()

    useEffect(() => {
        if (query !== "") {
            getMoviesByName(query).then(setMovies)
        }

    }, [query])


    return (
        <div>
            <MoviesSearch />
            <Container>
                <MoviesList>
                    {movies.map(({ id, title }) => (
                        <Movie key={id}>
                            <NavItem to={`/movies/${id}`} state={{ from: location }}>{title}</NavItem>
                        </Movie>
                    ))}
                </MoviesList>
            </Container>
        </div>
    )
}

export default MoviesSearchPage