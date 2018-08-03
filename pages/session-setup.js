import React from "react";
import { connect } from "react-redux";
import { createPlayers } from "../store.js";
function Context({ context, createPlayers }) {
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
      <button
        className="btn"
        onClick={() => {
          createPlayers(new Array(10).fill("random"));
        }}
      >
        Start game
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return { context: state.context };
}

function mapDispatchToProps(dispatch) {
  return { createPlayers: players => dispatch(createPlayers(players)) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Context);
