import noimage from '../../assets/imgs/Noimage.jpg';

const ItemDetails = ({item}) => {

   const { poster_path, title, overview } = item;

  const getYear = () => new Date(item.release_date).getFullYear();
  const getScore = () => (Math.round(item.vote_average * 10) + '%');
  const getGenre = () => (item.genres.map(({ name }) => name).join(', '));
  return (
    <>
      <img
      src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : noimage}
      alt={title}
      />
      <p>{title}</p>
      <p>Release date: {getYear()}</p>
      <p>Votes: {getScore()}</p>
      <p>Genres: {getGenre()}</p>
      <p>Overview {overview}</p> 
    </>
  )
}

export default ItemDetails
