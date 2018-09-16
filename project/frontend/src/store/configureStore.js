import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import todosReducer from "../reducers/todos";
import filtersReducer from "../reducers/filters";
import reduxThunk from "redux-thunk"

export default () => {
  const store = createStore(
    combineReducers({
      todos: todosReducer,
      filters: filtersReducer
    }),
    {},
    compose(
      applyMiddleware(reduxThunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};
