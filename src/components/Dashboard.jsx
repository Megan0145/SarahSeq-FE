import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import axiosWithAuth from '../axiosWithAuth';

function Dashboard(props) {
    useEffect(() => {
        axiosWithAuth().get("http://localhost:4000/api/users/tests")
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    });
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
export default connect(state => state, actionCreators)(Dashboard);
