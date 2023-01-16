import styled from "styled-components";

export const ChatSpaceStyle = styled.div`
    border: 1px solid gray;
    border-style: dashed;
    padding: 10rem;

    border-radius: 30px;
    background-color: #f5f5f5;

    box-shadow: 0px 0px 52px 99px rgba(0,0,0,0.03);
    -webkit-box-shadow: 0px 0px 52px 99px rgba(0,0,0,0.03);
    -moz-box-shadow: 0px 0px 52px 99px rgba(0,0,0,0.03);

    .create-room{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        input{
            width: 100%;
            padding: 10px;
            border-radius: 8px;
            border-style: none;
            font-family: 'Outfit', sans-serif;
            background-color: #151515;
            color: white;
            font-size: 14px;
            font-weight: bold;
        }
    }


`