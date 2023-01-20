import { useEffect, useState } from "react";
import { useParams, } from "react-router-dom"

import { getMovieCastById } from "../../../api/moviesApi"

export const MovieCast = () => {
    const { movieId } = useParams()
    const [movieInfoCast, setMovieInfoCast] = useState()
    // const location = useLocation()

    useEffect(() => {
        getMovieCastById(movieId).then(setMovieInfoCast)
    }, [movieId])

    if (!movieInfoCast) {
        return null
    }

    return (

        <ul>
            {movieInfoCast.map(({ cast_id, name, character, profile_path }) => (
                <li key={cast_id}>
                    <h4>{name}</h4>
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" width={100} />
                    <p>{character}</p>
                </li>
            ))}
        </ul>
    )
}

