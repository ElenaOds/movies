import { useEffect, useState } from 'react'
import { getTrendingMovies } from '../../services/moviesApi';
import { Section, List } from './Movies.styled';
import Card from '../../components/Card/Card';

const Movies = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getTrendingMovies();
        setVideos([...results]);
        console.log(results)
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
            return <Card key={video.id} video={video}/>
      })}
      </List>
    
    </Section>
  )
}

export default Movies
