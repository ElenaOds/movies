import noimage from '../../assets/imgs/Noimage.jpg';


import { StyledCard, StyledLink, CardTitle, CardInfoWrapper, CardText, Img, CardWrapper } from './Card.styled';

const Card = ({video, state}) => {
    const {media_type, poster_path, name, title, release_date, id, first_air_date } = video;
    


    return (
    <StyledCard key={id}>
        <StyledLink to={
                media_type === "movie" ? `/movies/${id}` : 
                media_type === "tv" ? `/tv/${id}` :
                media_type === "person" ? `/person/${id}` : null} 
            key={id} id={id} state={state}>
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
        </StyledLink>
    </StyledCard>
  )
}

export default Card;
