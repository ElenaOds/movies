import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element = {<Navigate to='popular'/>}/>
        <Route path='popular' element={<Home/>}/>
        <Route path='search' element={<Movies/>}/>
        <Route path='/:movieId' element={<MovieDetails/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
