import { useEffect, useState } from 'react';
import { useLocation  } from "react-router-dom";
import { getTrendingData } from '../../services/moviesApi';
import Card from '../../components/Card/Card';

import { Section, List } from './Home.styled'

const Home = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getTrendingData();
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

export default Home
