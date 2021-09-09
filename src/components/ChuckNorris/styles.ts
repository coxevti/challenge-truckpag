import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    img {
        width: 600px;
        height: 436px;
    }
    @media(max-width: 590px) {
        img {
            width: 95%;
            height: 95%;
        }
    }
`