import React from "react";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Login from "./Login";
import Register from "./Register";

function NavBar(props) {
  return (
    <div>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </main>
    </div>
  );
}

export default connect(state => state, actionCreators)(NavBar);
