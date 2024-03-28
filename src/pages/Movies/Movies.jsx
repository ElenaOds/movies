import { useEffect, useState } from 'react'
import { useLocation  } from "react-router-dom";
import { getTrendingMovies } from '../../services/moviesApi';
import { Section, List } from './Movies.styled';
import Card from '../../components/Card/Card';

const Movies = () => {
  const location = useLocation();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getTrendingMovies();
        setVideos([...results]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <List>
          {videos.map(video => {
            return <Card key={video.id} video={video} state={{from: location}}/>
      })}
      </List>
    
    </Section>
  )
}

export default Movies
