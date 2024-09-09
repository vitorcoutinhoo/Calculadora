import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f0f0f0;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #f5f5f5;
    width: 35%;
    min-width: 250px;
    max-width: 250px;
    min-height: 350px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px #aaf;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

