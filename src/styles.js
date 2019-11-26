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
  margin-top: 12vh;
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
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledMain = styled.main`
  width: 100vw;
  height: 90vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNav = styled.nav`
  width: 100%;
  background-color: #ece8e9;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    margin: 0 2rem;
    color: grey;
    &.active {
        color: #98698d;
    }
  }
  img {
    height: 30px;
  }
  div {
    width: 50%;
    display: flex;
    align-items: center;
    &.nav-left {
      justify-content: flex-start;
      padding-left: 2rem;
    }
    &.nav-right {
      justify-content: flex-end;
    }
  }
`;
