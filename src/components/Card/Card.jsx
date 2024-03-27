import noimage from '../../assets/imgs/Noimage.jpg'

import { StyledCard, CardTitle, CardInfoWrapper, CardText, Img, CardWrapper } from './Card.styled';

const Card = ({video}) => {
    const {media_type, poster_path, name, title, release_date, id, first_air_date } = video;
    


    return (
    <StyledCard key={id}>
        <Img
            src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : noimage}
            alt={media_type === "movie" ? title : name}
        /> 
        <CardWrapper>
        <CardTitle>{media_type === "movie" ? title.toUpperCase() : name.toUpperCase()}</CardTitle>
        <CardInfoWrapper>
        <CardText>{media_type === "movie" ? new Date(release_date).getFullYear() : new Date(first_air_date).getFullYear()}</CardText> 
        <CardText>{media_type === "movie" ? media_type.charAt(0).toUpperCase() + media_type.slice(1) : media_type.toUpperCase()}</CardText> 
        </CardInfoWrapper>
        </CardWrapper>
    </StyledCard>
  )
}

export default Card;
