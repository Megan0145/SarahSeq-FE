import React from "react";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Login from "./Login";
import Register from "./Register";
import { StyledNav, StyledMain } from '../styles';

function NavBar(props) {
  return (
    <div>
      <StyledNav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </StyledNav>
      <StyledMain>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </StyledMain>
    </div>
  );
}

export default connect(state => state, actionCreators)(NavBar);
