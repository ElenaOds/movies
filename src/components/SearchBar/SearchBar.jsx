import { Form, Input, SearchBtn, ErrorText } from './SearchBar.styled';

const SearchBar = () => {
  return (
    <Form>
        <Input 
            type='text'
            placeholder='search'/>
        <SearchBtn/>
        <ErrorText>Nothing is found. Please try another query</ErrorText>
    </Form>
  )
}

export default SearchBar;
