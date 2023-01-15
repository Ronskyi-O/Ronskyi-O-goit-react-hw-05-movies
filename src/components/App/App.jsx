import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/movies" element={<Layout />} />
      </Routes>
    </div>
  );
};
