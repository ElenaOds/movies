import { useEffect, useState } from 'react'
import { getTrendingData } from '../../services/moviesApi';
import Card from '../../components/Card/Card';

import { Section } from './Home.styled'

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getTrendingData();
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
      <ul>
          {videos.map(video => {
            return <Card key={video.id} video={video}/>
      })}
      </ul>
    
    </Section>
  )
}

export default Home
