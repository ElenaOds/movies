import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { getRecommendedMovies } from '../../services/moviesApi';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import { List } from './Recommendation.styled';


const Recommendation = () => {
  const [ movies, setMovies ] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async() => {
      try {
        const { results } = await getRecommendedMovies(movieId);
        setMovies([...results]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [movieId]);

  if (movies.length === 0) {
    return <p>There are no recommended movies</p>;
  }

  return (
    <List>
      {movies?.map((item) => {
        return (
          <AdditionalInfo key={item.id} item={item} state={{from: location}}/>
        //   <li key={id}>
        //     <Link to={`/movies/${id}`} state={{from: location}}>
        // <img
        //     src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : noimage}
        //     alt={title}
        // /> 
        // <div>
        // <p>{title.toUpperCase()}</p>
        // <div>
        // <p>{media_type === "movie" ? new Date(release_date).getFullYear() : new Date(first_air_date).getFullYear()}</p> 
        // <p>{media_type === "movie" ? media_type.charAt(0).toUpperCase() + media_type.slice(1) : media_type.toUpperCase()}</p> 
        // </div>
        // </div>
        // </Link>
        //   </li>
        )
      })}
    </List>
  )
}

export default Recommendation
