// @flow

import { RespondToFormReducer } from "../reducers";
import { Model } from "../types";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const init = new Model();

const createRespondToFormStore = (model: Model = init) => {
  return createStore(
    RespondToFormReducer,
    model,
    compose(
      applyMiddleware(thunk)
      //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};

const RespondToFormStore = createRespondToFormStore(init);

export default RespondToFormStore;

export { createRespondToFormStore };
