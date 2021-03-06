import Link from "next/link";
import { connect } from "react-redux";
import { setContext } from "../store.js";
import Header from "../components/Header.js";

function Context({ setContext }) {
  const styles = {
    btnContainer: {
      height: "150px",
      marginBottom: "50px"
    },
    btnStyle: {
      width: "100%",
      height: "100%"
    }
  };

  const contexts = {
    in: "India",
    nl: "Netherlands"
  };
  return (
    <div className="container">
      <div className="columns">
        <div className="column col-4 col-mx-auto" style={styles.btnContainer}>
          <Link href="/session-setup">
            <button
              className="btn"
              onClick={() => setContext(contexts.in)}
              style={styles.btnStyle}
            >
              {contexts.in}
            </button>
          </Link>
        </div>
      </div>
      <div className="columns">
        <div className="column col-4 col-mx-auto" style={styles.btnContainer}>
          <Link href="/session-setup">
            <button
              className="btn"
              onClick={() => setContext(contexts.nl)}
              style={styles.btnStyle}
            >
              {contexts.nl}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return { setContext: context => dispatch(setContext(context)) };
}

export default connect(
  null,
  mapDispatchToProps
)(Context);
