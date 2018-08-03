import React from "react";
import { connect } from "react-redux";

function Context({ context }) {
  return (
    <div>
      <h1>{context}</h1>
      <div className="form-group">
        <label className="form-label" htmlFor="input-example-1">
          Nr of players
        </label>
        <input
          className="form-input"
          type="number"
          placeholder="Nr of players"
        />
      </div>
      <button className="btn">Start game</button>
    </div>
  );
}

function mapStateToProps(state) {
  return { context: state.context };
}

export default connect(mapStateToProps)(Context);
