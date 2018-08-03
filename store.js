import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialState = {
  context: null
};

export const SET_CONTEXT = "SET_CONTEXT";

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTEXT:
      return Object.assign({}, state, {
        context: action.context
      });
    default:
      return state;
  }
};

// ACTIONS

export function setContext(context) {
  return { type: SET_CONTEXT, context };
}

export function initializeStore(initialState = initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
