import { useEffect, useState } from 'react';
import { useLocation  } from "react-router-dom";
import { getTrendingShows } from '../../services/moviesApi';
import { Section, List } from './TvShows.styled';
import Card from '../../components/Card/Card';

const TvShows = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getTrendingShows();
        setItems([...results]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Section>
    <List>
        {items.map(item => {
          return <Card key={item.id} item={item} state={{from: location}}/>
    })}
    </List>
  
  </Section>
  )
}

export default TvShows
