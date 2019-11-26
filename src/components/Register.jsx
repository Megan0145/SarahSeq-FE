import React, { useRef } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import axios from "axios";

function Register(props) {
  const username = useRef("");
  const password = useRef("");

  const registerUser = e => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/auth/register", {
        username: username.current.value,
        password: password.current.value
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <input placeholder="Username" ref={username} type="text" />
        <input placeholder="Password" ref={password} type="text" />
        <button onClick={registerUser}>Go</button>
      </form>
    </div>
  );
}

export default connect(state => state, actionCreators)(Register);
