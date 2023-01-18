import { useEffect, useState } from "react";
import { useParams, } from "react-router-dom"

import { getMovieReviewsById } from "../../../api/moviesApi"

export const MovieReviews = () => {
    const { movieId } = useParams()
    const [movieInfoReviews, setMovieInfoReviews] = useState()

    useEffect(() => {
        getMovieReviewsById(movieId).then(setMovieInfoReviews)
    }, [movieId])

    if (!movieInfoReviews) {
        return null
    }

    return (
        <ul>
            {!movieInfoReviews ? movieInfoReviews.map(({ id, author, content }) => (
                <li key={id}>
                    <h4>Author: {author}</h4>
                    <p>{content}</p>
                </li>
            )) : <p>We don't have any reviews for this movie</p>
            }
        </ul>
    )
}