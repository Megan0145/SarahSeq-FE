import React from "react";
import { NavLink, Route, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Dashboard from "./Dashboard";
import { StyledNav, StyledMain } from "../styles";

function NavBar() {
  let history = useHistory();
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div>
      <StyledNav>
        <div className="nav-left">
          <img src="icons8-dna-helix-64.png" alt="Dna double helix" />
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div className="nav-right">
          <NavLink exact to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink exact to="/register">
            Register
          </NavLink>
          <NavLink exact to="/login">
            Login
          </NavLink>
          <button onClick={logout}>Logout</button>
        </div>
      </StyledNav>
      <StyledMain>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </StyledMain>
    </div>
  );
}

export default connect(state => state, actionCreators)(NavBar);
