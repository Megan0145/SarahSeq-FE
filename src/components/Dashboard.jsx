import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function Dashboard(props) {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
export default connect(state => state, actionCreators)(Dashboard);
