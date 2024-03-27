import noimage from '../../assets/imgs/Noimage.jpg'

import { StyledCard, CardTitle, Img, CardWrapper,CardInfoWrapper, CardText } from './Card.styled';


const PersonCard = ({person}) => {
const { id, name, profile_path, known_for_department } = person;

  return (
    <StyledCard key={id}>
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
</StyledCard>
  )
}

export default PersonCard
