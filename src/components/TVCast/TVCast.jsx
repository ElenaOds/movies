import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getTVCast } from '../../services/moviesApi';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';

import { List } from './TVCast.styled';

const TVCast = () => {
  const [ cast, setCast ] = useState([]);
  const { seriesId } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const {cast} = await getTVCast(seriesId);
        setCast([...cast]);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [seriesId]);

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

export default TVCast;
