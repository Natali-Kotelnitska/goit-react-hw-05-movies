import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundView from 'ui/NotFoundView';

import Appbar from './AppBar/AppBar';
// import Cast from './Cast/Cast';
// import HomePage from './HomePage/HomePage';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
// import SearchBar from './MoviesPage/MoviesPage';
// import Reviews from './Reviews/Reviews';

const HomePage = lazy(() =>
  import('./HomePage/HomePage' /* webpackChunkName: "HomePage" */)
);
const SearchBar = lazy(() =>
  import('./MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  )
);
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "Cast" */));

export const App = () => {
  return (
    <>
      <Appbar />
      {/* <SearchBar></SearchBar> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" index element={<HomePage />}></Route>
          <Route path="/movies" element={<SearchBar />}></Route>
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>

          {/* <Route path="*" element={<NotFoundView />} /> */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
