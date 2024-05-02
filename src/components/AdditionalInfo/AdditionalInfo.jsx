import noImage from '../../assets/imgs/Noimage.jpg';
import { StyledLink, StyledCard, StyledName, StyledInfo, StyledCharacter, StyledWrapper, CardTitle, CardInfoWrapper, CardText } from './AdditionalInfor.styled';

const AdditionalInfo = ({item, state}) => {
const {id, profile_path, name, character, poster_path, title, release_date, first_air_date, media_type} = item;

  return (
    <StyledCard key={id}>
        <StyledLink to={
            media_type === "movie" ? `/movies/${id}` : `/person/${id}`}
            id={id} state={state}>
          <img
           src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : 
                profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}` : noImage}
            alt={media_type === "movie" ? title : name}/>
            <StyledWrapper>
              {media_type === "movie" ? 
             <>
              <CardTitle>{title.toUpperCase()}</CardTitle>
                <CardInfoWrapper>
                <CardText>{new Date(release_date).getFullYear()}</CardText> 
                <CardText>{media_type.charAt(0).toUpperCase() + media_type.slice(1)}</CardText> 
                </CardInfoWrapper>
             </>
            : 
            media_type === "tv" ? 
            <>
              <CardTitle>{name.toUpperCase()}</CardTitle>
                <CardInfoWrapper>
                <CardText>{new Date(first_air_date).getFullYear()}</CardText> 
                <CardText>'TV-Show'</CardText> 
                </CardInfoWrapper>
             </>
            :
            <> 
              <StyledName>Name: <StyledInfo>{name}</StyledInfo></StyledName>
              <StyledName>Character: <StyledCharacter>{character ? character : 'no info available'}</StyledCharacter></StyledName>
              </> }

             {/* {media_type === "movie" && <p>{title.toUpperCase()}</p>
             }
             {media_type === "tv" && <p>{name.toUpperCase()}</p>} */}
            {/* <StyledName>Name: <StyledInfo>{name}</StyledInfo></StyledName>
            <StyledName>Character: <StyledCharacter>{character ? character : 'no info available'}</StyledCharacter></StyledName>   */}
               
            
           </StyledWrapper>
             </StyledLink>
        </StyledCard>
  
  )
}

export default AdditionalInfo;
