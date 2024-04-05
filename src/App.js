import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
import Recommendation from './components/Recommendation/Recommendation';
import Images from './components/Images/Images';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const TvShows = lazy(() => import('./pages/TvShows/TvShows'));
const Person = lazy(() => import('./pages/Person/Person'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));


function App() {


  return (
    <>
 <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Navigate to='home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='tv-shows' element={<TvShows/>}/>
        <Route path='person' element={<Person/>}/>
        <Route path='movies/:movieId' element={<MovieDetails/>}>
          <Route path='cast' element={<Cast/>}/>
          <Route path='reviews' element={<Reviews/>}/>
          <Route path='recommendation' element={<Recommendation/>}/>
          <Route path='images' element={<Images/>}/>
        </Route>
      </Route>
    </Routes> 
    

    </>
  );
}

export default App;
