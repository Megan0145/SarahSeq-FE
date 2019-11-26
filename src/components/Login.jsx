import React, { useRef } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { StyledContainer, StyledForm } from '../styles';

function Login({ login }) {
  const username = useRef("");
  const password = useRef("");

  const loginUser = e => {
    e.preventDefault();
    login({
      username: username.current.value,
      password: password.current.value
    });
  };

  return (
    <StyledContainer>
      <StyledForm>
          <h1>Login</h1>
        <input placeholder="Username" ref={username} type="text" />
        <input placeholder="Password" ref={password} type="password" />
        <button onClick={loginUser}>Go</button>
      </StyledForm>
    </StyledContainer>
  );
}

export default connect(state => state, actionCreators)(Login);
