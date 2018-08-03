import React from "react";
import { connect } from "react-redux";
import { startClock, serverRenderClock } from "../store";
import Examples from "../components/examples";
import Link from "next/link";

function Index({ context }) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column col-4 col-mx-auto login">
          <div className="form-group">
            <label className="form-label" htmlFor="input-example-1">
              email {context}
            </label>
            <input className="form-input" type="email" placeholder="email" />
            <label className="form-label" htmlFor="input-example-1">
              pw
            </label>
            <input className="form-input" type="password" placeholder="pw" />
            <Link href="/context">
              <button className="btn">login</button>
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
