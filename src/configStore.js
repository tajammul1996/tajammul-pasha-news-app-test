import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// Import all the reducers
import news from "../src/reducers/news.reducer";

const store = createStore(
  combineReducers({
    news
  }),
  applyMiddleware(thunk, logger)
);

export default store;
