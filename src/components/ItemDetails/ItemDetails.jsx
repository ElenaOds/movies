import noimage from '../../assets/imgs/Noimage.jpg';

import { Wrapper, Img, Title, Text, SubText, LastText } from './ItemDetails.styled';

const ItemDetails = ({item}) => {

   const { poster_path, title, overview, origin_country, vote_count, release_date, vote_average, popularity } = item;

  const getYear = () => new Date(release_date).getFullYear();
  const getGenre = () => (item.genres.map(({ name }) => name).join(', '));
  return (
    <Wrapper>
      <Img
      src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : noimage}
      alt={title}
      />
      <div>
      <Title>{title.toUpperCase()}</Title>
      <Text><SubText>Release date: </SubText>{getYear()}</Text>
      <Text><SubText>Country: </SubText>{origin_country}</Text>
      <Text><SubText>Vote / Voutes: </SubText>{vote_average.toFixed(1)} / {vote_count}</Text>
      <Text><SubText>Popularity: </SubText>{popularity.toFixed(1)}</Text>
      <LastText><SubText>Genres: </SubText>{getGenre()}</LastText>
      <Text>ABOUT:</Text>
      <Text>{overview}</Text> 
   
      </div>
    </Wrapper>
  )
}

export default ItemDetails
