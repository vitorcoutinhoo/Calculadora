import styled from "styled-components";

const color = "#666";

export const InputContainer = styled.div`
    margin: 0 0 15px 0;
    padding: 0;

    width: 100%;
    height: 75px;
    background-color: ${color};

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'arial';

    input {
        width: 100%;
        height: 75px;
        padding: 0 10px;

        background-color: ${color};
        border: 0;
        text-align: right;
        
        font-size: 24px;
        font-family: 'Open Sans';
        font-weight: bold;
        color: #fff;

        outline: none;
    }
    
`;