import React from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({ counter, dec, inc, res, rnd }) => {
  return (
    <div className="p-4">
      <h2>{counter}</h2>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={dec}>
          DEC
        </button>
        <button className="btn btn-primary" onClick={inc}>
          INC
        </button>
        <button className="btn btn-primary" onClick={res}>
          RES
        </button>
        <button className="btn btn-primary" onClick={rnd}>
          RND
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, actions)(Counter);
