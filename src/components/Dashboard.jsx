import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function Dashboard(props) {
  const { getUserTests } = props;
  const tests = props.userTests.userTests;
  const token = localStorage.getItem("token");
  useEffect(() => {
    getUserTests();
  }, [getUserTests, token]);
  if (!tests) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h3>My tests: </h3>
      {tests.map(test => {
        return <p key={test.test_name}>{test.test_name}</p>;
      })}
    </div>
  );
}
export default connect(state => state, actionCreators)(Dashboard);
