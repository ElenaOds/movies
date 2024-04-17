import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getCredits } from '../../services/moviesApi';

import noImage from '../../assets/imgs/Noimage.jpg';
import { StyledLink } from './Cast.styled';

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
    <ul>
      {cast.map(({id, profile_path, name, character}) => {
        return (
          <StyledLink to={`/person/${id}`}>
          <li key={id}>
            <img
             src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : noImage}
             alt={name}/>
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </li>
          </StyledLink>
      )
      })}
    </ul>
  )
}

export default Cast
