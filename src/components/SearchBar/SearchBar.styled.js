import styled from 'styled-components';

import { ReactComponent  as Search } from '../../assets/icons/search.svg';



export const SearchBtn = styled(Search)`
position: absolute;
top: 0;
right: 0;
padding: 0;
cursor: pointer;
`

export const Input = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
  background-color: transparent;
  border: transparent;
  border-bottom: 1px solid var(--text-color);
  outline: none;
  margin-bottom: 8px;
  
  &::placeholder {
    color: var(--text-color);
  }
`
export const Form = styled.form`
position: relative;
display: flex;
flex-wrap: wrap;
width: 280px;
justify-content: center;
margin-right: auto;
margin-left: auto;

@media screen and (min-width: 768px) {
  width: 340px;
}

&:hover ${SearchBtn},
&:focus ${SearchBtn} {
    & > path {
     stroke: var(--hover-color);
 }
   }

&:hover ${Input},
&:focus ${Input} {
    border-color: var(--hover-color);
   }
`

export const ErrorText = styled.p`
font-weight: 400;
font-size: 12px;
color: rgba(255, 0, 27, 1);
text-align: center;
`