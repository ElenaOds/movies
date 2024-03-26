import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const TvShows = lazy(() => import('./pages/TvShows/TvShows'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));


function App() {


  return (
    <>
 <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Navigate to='home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='tv-shows' element={<TvShows/>}/>
        <Route path='/:movieId' element={<MovieDetails/>}/>
      </Route>
    </Routes> 
    

    </>
  );
}

export default App;
