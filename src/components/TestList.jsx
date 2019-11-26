import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function TestList(props) {
  const tests = props.tests.tests;
  return (
    <div>
      <h3>Try out one of our tests</h3>
      {tests.map(test => {
        return <h5 key={test.id}>{test.test_name}</h5>;
      })}
    </div>
  );
}
export default connect(state => state, actionCreators)(TestList);
