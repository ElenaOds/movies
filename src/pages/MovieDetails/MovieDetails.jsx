import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from 'react';
import { getMovie } from '../../services/moviesApi';
import { Section } from './MovieDetails.styled.js';
import LinkBack from "../../components/LinkBack/LinkBack.jsx";
import ItemDetails from "../../components/ItemDetails/ItemDetails.jsx";


const MovieDetails = () => {
    const [item, setItem] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
      getMovie(movieId).then(setItem);
  }, [movieId]);

  if (!item) 
  return null;

  const backLinkHref = location.state?.from ?? "/movies";

  return (
    <Section>
      <LinkBack backLinkHref={backLinkHref}/>
      <ItemDetails item={item}/>

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
            
    </Section>


  )
}

export default MovieDetails
