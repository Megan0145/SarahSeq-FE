import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function TestList() {
  return (
    <div>
      <h1>Test List</h1>
    </div>
  );
}
export default connect(state => state, actionCreators)(TestList);
