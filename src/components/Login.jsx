import React, { useRef } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

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
    <div>
      <form>
        <input placeholder="Username" ref={username} type="text" />
        <input placeholder="Password" ref={password} type="text" />
        <button onClick={loginUser}>Go</button>
      </form>
    </div>
  );
}

export default connect(state => state, actionCreators)(Login);
