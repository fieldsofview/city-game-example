import Link from "next/link";
import { connect } from "react-redux";
import { setContext } from "../store.js";

function Context({ setContext }) {
  return (
    <div>
      <Link href="/session-setup">
        <button className="btn" onClick={() => setContext("india")}>
          choose ind
        </button>
      </Link>
      <Link href="/session-setup">
        <button className="btn" onClick={() => setContext("netherlands")}>
          choose neth
        </button>
      </Link>
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
