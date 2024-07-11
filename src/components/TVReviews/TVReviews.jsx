import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getTVReviews } from '../../services/moviesApi';

const TVReviews = () => {
    const [ reviews, setReviews ] = useState([]);
    const { seriesId } = useParams();
 
   useEffect(() => {
     const fetchData = async() => {
       try {
         const { results } = await getTVReviews(seriesId);
         setReviews([...results])
       } catch (error) {
         console.log(error);
       }
     };
     fetchData();
   }, [seriesId])
 
   if (reviews.length === 0) {
     return <p>There are no reviews for this tv-show</p>;
   }
 
 
  return (
    <div>
    <ul>
      {reviews?.map(({ id, content, author }) => (              
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>                 
    ))}
   
    </ul>
</div>
  )
}

export default TVReviews;
