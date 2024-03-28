import noimage from '../../assets/imgs/Noimage.jpg'

import { StyledCard, StyledLink, CardTitle, Img, CardWrapper,CardInfoWrapper, CardText } from './Card.styled';


const PersonCard = ({person, state}) => {
const { id, name, profile_path, known_for_department } = person;

  return (
    <StyledCard key={id}>
       <StyledLink to={`/person/${id}`} 
            key={id} id={id} state={state}>
    <Img
        src={profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}` : noimage}
        alt={name}
    /> 
    <CardWrapper>
    <CardTitle>{name.toUpperCase()}</CardTitle>
    <CardInfoWrapper>
        <CardText>{known_for_department}</CardText> 
       
        </CardInfoWrapper>
    </CardWrapper>
    </StyledLink>
</StyledCard>
  )
}

export default PersonCard
