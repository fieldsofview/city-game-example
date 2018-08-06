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
  return (
    <div className="container">
      <Header />

      <div className="columns">
        <div className="column col-4 col-mx-auto" style={styles.btnContainer}>
          <Link href="/session-setup">
            <button
              className="btn"
              onClick={() => setContext("india")}
              style={styles.btnStyle}
            >
              India
            </button>
          </Link>
        </div>
      </div>
      <div className="columns">
        <div className="column col-4 col-mx-auto" style={styles.btnContainer}>
          <Link href="/session-setup">
            <button
              className="btn"
              onClick={() => setContext("netherlands")}
              style={styles.btnStyle}
            >
              Netherlands
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
