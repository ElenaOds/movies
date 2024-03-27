import styled from 'styled-components';



export const StyledCard = styled.li`
display: flex;
flex-direction: column;
width: 100%;
overflow: hidden;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);


@media (min-width: 320px) {
    width: 80%;
  }

    @media (min-width: 640px) {
        width: 48%;
      }
      
      @media (min-width: 768px) {
        width: 31%;
      }

      @media (min-width: 1280px) {
        width: 23.7%;
      }
`

const text = `
    font-weight: 500;
    font-size: 12px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    `

    export const CardTitle = styled.p`
    ${text}
    overflow: hidden;
    color: var(--secondary-text-color);
    margin-bottom: 4px;

    @media (min-width: 1280px) {
        font-size: 14px;
    }
`;

export const Img = styled.img`
    height: 100%;
`

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