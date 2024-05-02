import styled from 'styled-components';

const text = `
    font-weight: 500;
    font-size: 14px;
    color: var(--secondary-text-color);

    // @media (min-width: 768px) {
    //     font-size: 14px;
    // }

    @media (min-width: 1280px) {
        font-size: 16px;
    }
    `

export const Wrapper = styled.div`
    margin-bottom: 20px;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
    }
`;

export const Img = styled.img`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;

    @media (min-width: 480px) {
        width: 80%;
    }

    @media (min-width: 640px) {
        width: 60%;
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 60px;
        margin-left: 0;
        width: auto;
        height: 370px;
    }

    @media (min-width: 1280px) {
        height: 470px;
    }
`;

export const Title = styled.h2`
    ${text}
    font-size: 20px;
    margin-bottom: 20px;

    @media (min-width: 1280px) {
        font-size: 30px;
    }
`;

export const Text = styled.p`
    ${text}
    margin-bottom: 8px;
`;

export const LastText = styled.p`
    ${text}
    margin-bottom: 20px;
`;

export const SubText = styled.span`
    color: var(--additional-text-color);
`