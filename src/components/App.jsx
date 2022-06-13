import { Route, Routes } from 'react-router-dom';
// import NotFoundView from 'ui/NotFoundView';
import Appbar from './AppBar/AppBar';
// import Container from './Container/Container';
import HomePage from './HomePage/HomePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import SearchBar from './MoviesPage/MoviesPage';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Appbar />
      {/* <SearchBar></SearchBar> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<SearchBar />}></Route>
        <Route path="*" element={<HomePage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
          <Route path="reviews" element={<Reviews />} />
          {/* <Route path="reviews" /> */}
        </Route>

        {/* <Route path="*" element={<NotFoundView />} /> */}
      </Routes>
      {/* <Reviews /> */}
      {/* <Appbar />
      <HomePage></HomePage> */}

      {/* <Route path="/" element={<AppBar />}> */}
      {/* <Route path = '/' element={<Layout/>} 
          <Route path='create' element={<ListPage/>
          <Route path='*' element={<NotFoundPage/>*/}
      {/* </Route>
     
      {/* <Container> */}
      {/* <AppBar /> */}

      {/* <Route>HomePage</Route> */}
      {/* </Container> */}
      {/* React homework template */}
    </>
  );
};
