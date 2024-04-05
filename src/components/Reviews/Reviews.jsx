import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getReviews } from '../../services/moviesApi';

const Reviews = () => {
   const [ reviews, setReviews ] = useState([]);
   const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async() => {
      try {
        const { results } = await getReviews(movieId);
        setReviews([...results])
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId])

  if (reviews.length === 0) {
    return <p>There are no reviews for this movie</p>;
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

export default Reviews
