import styled from "styled-components";

export const ChatStyle = styled.div`
    border: 1px solid gray;
    border-style: dashed;
    max-height: 600px;
    padding: 20px;
    overflow: hidden;


    .header{
        font-size: 14px;
        font-weight: bold;
        color: green;
        padding: 10px;
        max-width: 800px;
        margin: 0 50px;
    };

    hr{
        border-color: gray;
        border-style: dashed;
        margin-top: -20px;
        margin-bottom: 20px;
    }

    .messages{
        overflow-y: scroll;
        max-height: 400px;


        .message-header{
            display: flex;
            flex-direction: row;
            gap: 5px;
            align-items: center;
            font-size: 14px;
        }

        .message-header-sender{
            display: flex;
            flex-direction: row;
            gap: 5px;
            align-items: center;
            font-size: 14px;
            justify-content: right;
        }

        .message-text{
            max-width: 80%;
            height: auto;
            font-size: 13px;
            color: black;
            font-weight: normal;
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 8px;
            margin-top: 5px;
        }

        .message-text-sender{
            display: flex;
            flex-direction: row;
            justify-content: right;
            margin-right: 0 !important;

            font-size: 13px;
            color: black;
            font-weight: normal;
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 8px;
            /* max-width: 80%; */
            margin-top: 5px;
            margin-left: 40px;
        }

    }

    form{
        display: flex;
        flex-direction: row;
        gap: 10px;

        textarea{
            width: 100%;
            border-radius: 8px;
            border-style: none;
            font-family: 'Outfit', sans-serif;
            color: black;
            font-size: 14px;

        }
    }
    
`