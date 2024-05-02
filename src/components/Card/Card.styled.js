import styled from 'styled-components';
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
   text-decoration: none;
`;

export const StyledCard = styled.li`
width: 100%;
margin-bottom: 20px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);


    @media (min-width: 480px) {
        width: calc((100% - 4 * 10px) / 2);
        margin: 10px;
    }

    @media (min-width: 640px) {
        width: calc((100% - 6 * 10px) / 3);
      }
      
      @media (min-width: 768px) {
        width: calc((100% - 8 * 10px) / 4);
      }

      @media (min-width: 1280px) {
        width: calc((100% - 10 * 10px) / 5);
      }
`;

export const GeneralWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
`;

const text = `
    font-weight: 500;
    font-size: 12px;
    `

    export const CardTitle = styled.p`
    ${text}
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--secondary-text-color);
    margin-bottom: 4px;

    @media (min-width: 1280px) {
        font-size: 14px;
    }
`;


export const CardInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CardText = styled.p`
    ${text}
    color: var(--hover-color);

    @media (min-width: 1280px) {
        font-size: 14px;
    }
`

export const CardWrapper = styled.div`
    padding: 8px;
`