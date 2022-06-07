// import { Route } from 'react-router-dom';
// import AppBar from './AppBar/AppBar';
// import Container from './Container/Container';
import { Route, Routes } from 'react-router-dom';
import Appbar from './AppBar/AppBar';
import HomePage from './HomePage/HomePage';
import SearchBar from './MoviesPage/MoviesPage';
// import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Appbar />
      {/* <SearchBar></SearchBar> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="movies" element={<SearchBar />}></Route>
      </Routes>
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
