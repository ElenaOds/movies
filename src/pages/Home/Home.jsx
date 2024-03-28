import { useEffect, useState } from 'react';
import { useLocation  } from "react-router-dom";
import { getTrendingData } from '../../services/moviesApi';
import Card from '../../components/Card/Card';

import { Section, List } from './Home.styled'

const Home = () => {
  const location = useLocation();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getTrendingData();
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

export default Home
