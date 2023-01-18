import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieById } from "../../../api/moviesApi"

import { MovieContainer } from "./MovieDetails.styled"

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movieDetails, setMovieDetails] = useState()
    useEffect(() => {
        getMovieById(movieId).then(setMovieDetails)
    }, [movieId])

    if (!movieDetails) {
        return null
    }

    const { poster_path, overview, original_title, release_date, vote_average, genres } = movieDetails
    const yearOfRelease = release_date.slice(0, 4);
    const userScore = Math.round(vote_average * 10);
    const listOfGenres = genres.map((genre) => genre.name).join(", ");

    return (
        < MovieContainer >
            {<img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" width={250} />}
            <div>
                <h2>{original_title} ({yearOfRelease})</h2>
                <p>User Score: {userScore}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{listOfGenres}</p>
            </div>
        </ MovieContainer>
    )
}