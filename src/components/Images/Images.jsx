// import { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
// import { getImages } from '../../services/moviesApi';

const Images = () => {
//     const [ images, setImages ] = useState([]);
//     const { movieId } = useParams();


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { results } = await getImages(movieId);
//         setImages([...results]);
//         console.log(results);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, [movieId]);

  return (
    <ul>
        images
         {/* {images.map((image) => {
        return (
          <li key={image.id}>
            <img
             src={`https://image.tmdb.org/t/p/w500${image.profile_path}`}
             alt={image.name}/>
            
          </li>
      )
      })}   */}
      
    </ul>
  )
}

export default Images
