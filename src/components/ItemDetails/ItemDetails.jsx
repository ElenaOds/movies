import noimage from '../../assets/imgs/Noimage.jpg';

import { Wrapper, Img, Title, Text, SubText, LastText } from './ItemDetails.styled';

const ItemDetails = ({item}) => {

   const { poster_path, title, overview, origin_country, vote_count, release_date, first_air_date, vote_average, popularity, name, number_of_seasons } = item;

  const getYear = () => new Date(release_date).getFullYear();
  const getShowYear = () => new Date(first_air_date).getFullYear();
  const getGenre = () => (item.genres.map(({ name }) => name).join(', '));
  
  return (
    <Wrapper>
      <Img
      src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : noimage}
      alt={title ? title : name}
      />
      <div>
      <Title>{title ? title.toUpperCase() : name.toUpperCase()}</Title>
      <Text><SubText>Release date: </SubText>{release_date ? getYear() : getShowYear()}</Text>
      <Text><SubText>Country: </SubText>{origin_country}</Text> 
      {number_of_seasons ? <Text><SubText>Seanons: </SubText>{number_of_seasons}</Text>
       : null }
      
      <Text><SubText>Vote / Voutes: </SubText>{vote_average.toFixed(1)} / {vote_count}</Text> 
       <Text><SubText>Popularity: </SubText>{popularity.toFixed(0)}</Text> 
      <LastText><SubText>Genres: </SubText>{getGenre()}</LastText> 
      <Text>ABOUT:</Text>
      <Text>{overview}</Text>  
   
      </div>
    </Wrapper>
  )
}

export default ItemDetails
