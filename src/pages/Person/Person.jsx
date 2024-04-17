import { useEffect, useState } from 'react'
import { getTrendingPerson } from '../../services/moviesApi';
import { useLocation  } from "react-router-dom";
import { Section, List } from './Person.styled';
import Card from '../../components/Card/Card';

const Person = () => {
  const location = useLocation();
    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { results } = await getTrendingPerson();
          setItems([...results]);
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
        {items.map(item => {
          return <Card key={item.id} item={item} state={{from: location}}/>
    })}
    </List>
  
  </Section>
  )
}

export default Person
