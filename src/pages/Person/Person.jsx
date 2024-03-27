import { useEffect, useState } from 'react'
import { getTrendingPerson } from '../../services/moviesApi';
import { Section, List } from './Person.styled';
import PersonCard from '../../components/Card/PersonCard';

const Person = () => {
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
          return <PersonCard key={person.id} person={person}/>
    })}
    </List>
  
  </Section>
  )
}

export default Person
