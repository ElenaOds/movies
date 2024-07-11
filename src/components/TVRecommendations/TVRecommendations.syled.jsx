import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

     @media (max-width: 480px) {
        justify-content: center;
    }
`;
