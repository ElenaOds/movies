import noimage from '../../assets/imgs/Noimage.jpg'

const Card = ({video}) => {
    const {media_type, poster_path, name, title, release_date, id, first_air_date } = video;

    return (
    <li key={id}>
        <img
            src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : noimage}
            alt={media_type === "movie" ? title : name}
        /> 
        <p>{media_type === "movie" ? title : name}</p>
        <p>{media_type === "movie" ? new Date(release_date).getFullYear() : new Date(first_air_date).getFullYear()}</p> 
    </li>
  )
}

export default Card
