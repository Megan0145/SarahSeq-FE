import React from "react";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { StyledNav, StyledMain } from "../styles";

function NavBar(props) {
  return (
    <div>
      <StyledNav>
        <div className="nav-left">
          <img src="icons8-dna-helix-64.png" alt="Dna double helix" />
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="nav-right">
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </StyledNav>
      <StyledMain>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </StyledMain>
    </div>
  );
}

export default connect(state => state, actionCreators)(NavBar);
