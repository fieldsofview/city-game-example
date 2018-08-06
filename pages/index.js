import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Header from "../components/Header.js";

function Index({ context }) {
  const styles = {
    btnLogin: {
      float: "right"
    }
  };
  return (
    <div className="container">
      <Header />

      <div className="columns">
        <div className="column col-4 col-mx-auto">
          <div className="form-group">
            <label className="form-label" htmlFor="input-example-1">
              Email:
            </label>
            <input
              className="form-input"
              type="email"
              placeholder="Eg. example@example.com"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="input-example-1">
              Password:
            </label>
            <input className="form-input" type="password" />
          </div>
          <div className="form-group">
            <Link href="/context">
              <button className="btn" style={styles.btnLogin}>
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { context: state.context };
}

export default connect(mapStateToProps)(Index);
