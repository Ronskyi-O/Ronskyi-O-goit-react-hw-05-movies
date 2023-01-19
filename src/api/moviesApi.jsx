const API_KEY = "cffdf883bd1f8aa081f178a93c58c421";

export const getTrendingMovies = () => {
    return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
        .then((res) => res.json())
        .then((res) => res.results);
}

export const getMovieById = (movieId) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
        .then((res) => res.json())
}

export const getMovieCastById = (movieId) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
        .then((res) => res.json())
        .then((res) => res.cast);
}

export const getMovieReviewsById = (movieId) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`)
        .then((res) => res.json())
        .then((res) => res.results);
}

export const getMoviesByName = (query) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=${query}`)
        .then((res) => res.json())
        .then((res) => res.results);
}