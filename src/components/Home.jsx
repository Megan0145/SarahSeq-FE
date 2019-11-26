import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import TestList from '../components/TestList';

function Home(props) {
  const { getAllTests } = props;
  const tests = props.tests.tests;
  useEffect(() => {
    getAllTests();
  }, [getAllTests]);
  if (!tests) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Home</h1>
      <TestList />
    </div>
  );
}
export default connect(state => state, actionCreators)(Home);
