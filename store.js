import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialState = {
  context: "none",
  players: []
};

export const SET_CONTEXT = "SET_CONTEXT";
export const CREATE_PLAYERS = "CREATE_PLAYERS";

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTEXT:
      return Object.assign({}, state, {
        context: action.context
      });
    case CREATE_PLAYERS:
      return Object.assign({}, state, {
        players: action.players
      });
    default:
      return state;
  }
};

// ACTIONS

export function setContext(context) {
  return { type: SET_CONTEXT, context };
}
export function createPlayers(players) {
  return { type: CREATE_PLAYERS, players };
}

export function initializeStore(initialState = initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
