import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #ece8e9;
  box-shadow: 8px 8px 10px #e0e0e0;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  h1 {
      color: grey;
      margin-bottom: 2rem;
  }
  input,
  button {
    height: 5vh;
    width: 70%;
    border: none;
    border-radius: 5px;
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: grey;
  }
  button {
    background-color: #98698d;
    color: whitesmoke;
    cursor: pointer;
  }
`;

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
