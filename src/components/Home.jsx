import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

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
      <h3>Try out one of our tests</h3>
      {tests.map(test => {
        return <h5 key={test.id}>{test.test_name}</h5>;
      })}
    </div>
  );
}
export default connect(state => state, actionCreators)(Home);
