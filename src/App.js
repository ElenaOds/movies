import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
import Recommendation from './components/Recommendation/Recommendation';
import TVCast from './components/TVCast/TVCast';
import TVReviews from './components/TVReviews/TVReviews';
import TVRecommendations from './components/TVRecommendations/TVRecommendations.jsx';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const TvShows = lazy(() => import('./pages/TvShows/TvShows'));
const Person = lazy(() => import('./pages/Person/Person'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const TVShowDetails = lazy(() => import('./pages/TVShowDetails/TVShowDetails'));


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
        </Route>
        <Route path='tv-shows/:seriesId' element={<TVShowDetails/>}>
          <Route path='cast' element={<TVCast/>}/>
          <Route path='reviews' element={<TVReviews/>}/>
          <Route path='recommendation' element={<TVRecommendations/>}/>
        </Route>
      </Route>
    </Routes> 
    

    </>
  );
}

export default App;
