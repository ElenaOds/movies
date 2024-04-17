import { useParams, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from 'react';
import { getMovie } from '../../services/moviesApi';
import { Section, LinksWrapper, StyledLink } from './MovieDetails.styled.js';
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
      <LinksWrapper>
        <li><StyledLink to='cast' state={location.state}>Cast</StyledLink></li>
        <li><StyledLink to='reviews' state={location.state}>Reviews</StyledLink></li>
        <li><StyledLink to='recommendation' state={location.state}>Recommedation</StyledLink></li>
        <li><StyledLink to='images' state={location.state}>Images</StyledLink></li>
      </LinksWrapper>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>        
    </Section>


  )
}

export default MovieDetails
