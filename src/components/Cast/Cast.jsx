import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getCredits } from '../../services/moviesApi';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';

import { List } from './Cast.styled';

const Cast = () => {
  const [ cast, setCast ] = useState([]);
  const { movieId } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const {cast} = await getCredits(movieId);
        setCast([...cast]);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [movieId]);


  return (
    <List>
      {cast.map((item) => {
        return (
          <AdditionalInfo key={item.id} item={item}/>    
      )
      })}
    </List>
  )
}

export default Cast;
