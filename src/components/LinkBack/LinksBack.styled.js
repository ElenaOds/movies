import styled from 'styled-components';
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
   display: inline-block;
   text-decoration: none;
   text-align: center;
   font-weight: 500;
   font-size: 12px;
   color: var(--text-color);
   padding: 3px;
   background: linear-gradient(-45deg, #000, #ff0000, #000, #ff0000);
   margin-bottom: 16px;
   width: 60px;
   border-radius: 5px;
   background-size: 300%;
   background-position: 50% 0;
   transition: background 0.8s;

   @media (min-width: 768px) {
    margin-bottom: 18px;
  }

  @media (min-width: 1280px) {
    font-size: 14px;
    width: 70px;
    margin-bottom: 20px;
  }




   &:hover,
   &:focus {
    background-position: 150% 50%;
   }
`