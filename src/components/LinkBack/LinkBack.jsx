import { StyledLink } from './LinksBack.styled';

const LinkBack = ({backLinkHref}) => {
  return (
    <StyledLink to={backLinkHref}>Go back</StyledLink>
  )
}

export default LinkBack
