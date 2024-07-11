import { useParams, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from 'react';
import { getShow } from '../../services/moviesApi';
import { Section, LinksWrapper, StyledLink } from './TVShowDetails.styled.jsx';
import LinkBack from "../../components/LinkBack/LinkBack.jsx";
import ItemDetails from "../../components/ItemDetails/ItemDetails.jsx";

const TVShowDetails = () => {
    const [item, setItem] = useState(null);
    const { seriesId } = useParams();
    const location = useLocation();

    useEffect(() => {
    getShow(seriesId).then(setItem);
  }, [seriesId]);

  if (!item) 
  return null;

  console.log(item)

  const backLinkHref = location.state?.from ?? "/tv-shows";
  return (
    
      <Section>
      <LinkBack backLinkHref={backLinkHref}/>
     <ItemDetails item={item}/> 
     <LinksWrapper>
        <li><StyledLink to='cast' state={location.state}>Cast</StyledLink></li>
        <li><StyledLink to='reviews' state={location.state}>Reviews</StyledLink></li>
        <li><StyledLink to='recommendation' state={location.state}>Recommedation</StyledLink></li>
      </LinksWrapper>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>        
    </Section>
    
  )
}

export default TVShowDetails;
