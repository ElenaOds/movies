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
        )
      })}
    </List>
  )
}

export default Recommendation
