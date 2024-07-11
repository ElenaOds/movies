import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Section = styled.section`
    padding: 20px 20px;  
   
    @media screen and (min-width: 768px) {
        padding: 32px 32px;   
}
`
export const LinksWrapper = styled.ul`
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    color: var(--text-color);
    padding: 3px;
    background: linear-gradient(-45deg, #000, #ff0000, #000, #ff0000);
    border-radius: 5px;
    background-size: 300%;
    background-position: 50% 0;
    transition: background 0.8s;
   

    @media (min-width: 768px) {
        font-size: 14px;
        padding: 4px;
    }

    @media (min-width: 1280px) {
        font-size: 16px;
        padding: 5px;
    }

    &:hover,
    &:focus {
        background-position: 150% 50%;
        outline: none;
    }
`;