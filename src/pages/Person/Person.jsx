import { useEffect, useState } from 'react'
import { getTrendingPerson } from '../../services/moviesApi';
import { useLocation  } from "react-router-dom";
import { Section, List } from './Person.styled';
import PersonCard from '../../components/Card/PersonCard';

const Person = () => {
  const location = useLocation();
    const [persons, setPersons] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { results } = await getTrendingPerson();
          setPersons([...results]);
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
        {persons.map(person => {
          return <PersonCard key={person.id} person={person} state={{from: location}}/>
    })}
    </List>
  
  </Section>
  )
}

export default Person
