import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { Home } from "components/Home/Home";
// import { MoviesSearchPage } from "Pages/MoviesSearchPage/MoviesSearchPage"
// import { MovieDetails } from "components/Movies/MovieDetails/MovieDetails"
import { MovieCast } from "components/Movies/MovieCast/MovieCast"
import { MovieReviews } from "components/Movies/MovieReviews/MovieReviews";

const MoviesSearchPage = lazy(() => import('../../Pages/MoviesSearchPage/MoviesSearchPage'))
const MovieDetails = lazy(() => import('../Movies/MovieDetails/MovieDetails'))

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesSearchPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
