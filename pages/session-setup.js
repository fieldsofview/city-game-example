import React from "react";
import { connect } from "react-redux";
import { createPlayers } from "../store.js";
import Header from "../components/Header.js";
import generatePersona from "../js/data.js";

function Context({ context, createPlayers }) {
  const styles = {
    btnLogin: {
      float: "right"
    }
  };
  return (
    <div className="container">
      <div className="columns">
        <div className="column col-8 col-mx-auto">
          <h4>Context selected: {context}</h4>
          <div className="form-group">
            <label className="form-label" htmlFor="input-example-1">
              Nr of players
            </label>
            <input
              min="0"
              className="form-input"
              id="numberInput"
              type="number"
              placeholder="Eg. 5"
            />
          </div>
          <button
            className="btn"
            style={styles.btnLogin}
            onClick={e => {
              let val = parseInt(document.getElementById("numberInput").value);
              createPlayers(generatePersona(val));
            }}
          >
            Start game
          </button>
        </div>
      </div>
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
