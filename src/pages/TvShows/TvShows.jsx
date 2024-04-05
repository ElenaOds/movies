import { useEffect, useState } from 'react';
import { useLocation  } from "react-router-dom";
import { getTrendingShows } from '../../services/moviesApi';
import { Section, List } from './TvShows.styled';
import Card from '../../components/Card/Card';

const TvShows = () => {
  const location = useLocation();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getTrendingShows();
        setVideos([...results]);
        // console.log(results)
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

export default TvShows
