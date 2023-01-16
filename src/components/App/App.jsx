import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { Home } from "components/Home/Home";
import { MoviesSearch } from "components/Movies/MoviesSearc/MoviesSearc"

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesSearch />} />
        </Route>
      </Routes>
    </div>
  );
};
