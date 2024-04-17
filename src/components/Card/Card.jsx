import noimage from '../../assets/imgs/Noimage.jpg';


import { StyledCard, StyledLink, CardTitle, CardInfoWrapper, CardText, Img, CardWrapper } from './Card.styled';

const Card = ({item, state}) => {
    const {media_type, poster_path, name, title, release_date, id, first_air_date, profile_path, known_for_department } = item;
    

    return (
    <StyledCard key={id}>
        <StyledLink to={
                media_type === "movie" ? `/movies/${id}` : 
                media_type === "tv" ? `/tv/${id}` :
                media_type === "person" ? `/person/${id}` : null} 
            key={id} id={id} state={state}>
        <Img
            src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : 
                profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}` : noimage}
            alt={media_type === "movie" ? title : name}
        /> 
        <CardWrapper>
        <CardTitle>{media_type === "movie" ? title.toUpperCase() : name.toUpperCase()}</CardTitle>
        <CardInfoWrapper>
        <CardText>{media_type === "movie" ? new Date(release_date).getFullYear() : 
        media_type === "tv" ? new Date(first_air_date).getFullYear() :
        media_type === "person" ? known_for_department : null}</CardText> 
        <CardText>{media_type === "movie" ? media_type.charAt(0).toUpperCase() + media_type.slice(1) :
                    media_type === "tv" ?  'TV-Show' : null}</CardText> 
        </CardInfoWrapper>
        </CardWrapper>
        </StyledLink>
    </StyledCard>
  )
}

export default Card;
