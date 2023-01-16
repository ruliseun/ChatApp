import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 100vh;
    max-width: 800px;
    /* background-color: #f5f5f5; */
    /* border: 1px solid red; */

    .signOut {
        background-color: #e5e5e5;
        text-align: center;
        color: black;
        padding: 14px 20px;
        border-radius: 8px;
        font-family: 'Outfit', sans-serif;
        border-style: none;
        margin-top: 10px;
    }
    .signOut:hover {
        cursor: pointer;
        color: red;
        background-color: #e5e5e5;         
    }
`