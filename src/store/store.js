import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const configureStore = (persistedState = {}) => {
  let store;

  if (process.env.NODE_ENV === "production") {
    store = createStore(rootReducer, persistedState);
  } else {
    store = createStore(
      rootReducer,
      persistedState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }

  return store;
};

export default configureStore;
