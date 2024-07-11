import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { getTVRecommendedMovies } from '../../services/moviesApi';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import { List } from './TVRecommendations.syled';

const TVRecommendations = () => {
  const [ items, setItems ] = useState([]);
  const { seriesId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async() => {
      try {
        const { results } = await getTVRecommendedMovies(seriesId);
        setItems([...results]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [seriesId]);

  if (items.length === 0) {
    return <p>There are no recommended tv-shows</p>;
  }

  return (
    <List>
      {items?.map((item) => {
        return (
          <AdditionalInfo key={item.id} item={item} state={{from: location}}/>
        )
      })}
    </List>
  )
}

export default TVRecommendations;
