import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from 'react';
import { getMovie } from '../../services/moviesApi';

import noimage from '../../assets/imgs/Noimage.jpg';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();


    useEffect(() => {
      getMovie(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) 
  return null;

  const getYear = () => new Date(movie.release_date).getFullYear();
  const getScore = () => (Math.round(movie.vote_average * 10) + '%');
  const getGenre = () => (movie.genres.map(({ name }) => name).join(', '));


  const { poster_path, title, overview } = movie;
  const backLinkHref = location.state?.from ?? "/movies";


  return (
    <section>
       <Link to={backLinkHref}>
        Go back</Link>
    
      <img
      src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : noimage}
      alt={title}
      />
      <p>{title}</p>
      <p>Release date: {getYear()}</p>
      <p>Votes: {getScore()}</p>
      <p>Genres: {getGenre()}</p>
      <p>Overview {overview}</p>

      <p>Additional information</p> 
            <ul>
            <li><Link to='cast' state={location.state}>Cast</Link></li>
            <li><Link to='reviews' state={location.state}>Reviews</Link></li>
            <li><Link to='recommendation' state={location.state}>Recommedation</Link></li>
            <li><Link to='images' state={location.state}>Images</Link></li>
            </ul>
            <Suspense fallback={null}>
            <Outlet />
            </Suspense>
            
    </section>


  )
}

export default MovieDetails
