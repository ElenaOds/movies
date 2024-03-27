import SearchBar from '../SearchBar/SearchBar';
import { ReactComponent  as Logo } from '../../assets/icons/film.svg';

import { StyledHeader, LogoWrapper, Title, StyledNavLink, Nav, LinksWrapper } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <LinksWrapper>
      <LogoWrapper to='/home'>
      <Logo />
      <Title>Filmoteka</Title>
      </LogoWrapper>
      <Nav>
      <StyledNavLink to='/home' aria-label='home'
      onClick={(e) => e.target.blur()}>Home</StyledNavLink>
      <StyledNavLink to='/movies' aria-label='movies'
      onClick={(e) => e.target.blur()}>Movies</StyledNavLink>
      <StyledNavLink to='/tv-shows' aria-label='tv-shows'
      onClick={(e) => e.target.blur()}>TV-shows</StyledNavLink>
      <StyledNavLink to='/person' aria-label='person'
      onClick={(e) => e.target.blur()}>Person</StyledNavLink>
      </Nav>
      </LinksWrapper>
      <SearchBar/>
    </StyledHeader>
  )
}

export default Header
