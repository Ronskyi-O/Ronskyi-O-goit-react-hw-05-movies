import { useEffect, useState } from "react";
import { useParams, Outlet, Link, useLocation } from "react-router-dom"
import { getMovieById } from "../../../api/moviesApi"

import { MovieContainer, ButtonGoBack, ImageContainer, DetailsContainer, AdditionalInfoContainer, AdditionalInfoList, AdditionalInfoItem } from "./MovieDetails.styled"

const MovieDetails = () => {
    const { movieId } = useParams()
    const [movieDetails, setMovieDetails] = useState()
    const location = useLocation()

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
    const backLinkHref = location.state?.from ?? "/"
    return (
        <div>
            < MovieContainer >
                <ImageContainer>
                    <Link to={backLinkHref} ><ButtonGoBack>Go Back</ButtonGoBack></Link>
                    {<img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`Poster to ${original_title}`} width={250} />}
                </ImageContainer>
                <DetailsContainer>
                    <h2>{original_title} ({yearOfRelease})</h2>
                    <p>User Score: {userScore}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{listOfGenres}</p>
                </DetailsContainer>
            </ MovieContainer>
            <hr />
            <AdditionalInfoContainer>
                <h3>Additional Information</h3>
                <AdditionalInfoList>
                    <li>
                        <AdditionalInfoItem to={"cast"} state={{ from: backLinkHref }}>Cast</AdditionalInfoItem>
                    </li>
                    <li>
                        <AdditionalInfoItem to={"reviews"} state={{ from: backLinkHref }}>Reviews</AdditionalInfoItem>
                    </li>
                </AdditionalInfoList>
            </AdditionalInfoContainer>
            <hr />
            <Outlet />
        </div>
    )
}

export default MovieDetails