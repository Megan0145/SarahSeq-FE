import React, { useRef } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { StyledContainer, StyledForm } from "../styles";
import axios from "axios";

function Login(props) {
  const username = useRef("");
  const password = useRef("");

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/auth/login", {
        username: username.current.value,
        password: password.current.value
      })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <StyledContainer>
      <StyledForm>
        <h1>Login</h1>
        <input placeholder="Username" ref={username} type="text" />
        <input placeholder="Password" ref={password} type="password" />
        <button onClick={login}>Go</button>
      </StyledForm>
    </StyledContainer>
  );
}

export default connect(state => state, actionCreators)(Login);
