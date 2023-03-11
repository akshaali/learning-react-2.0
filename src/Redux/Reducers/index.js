import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import FetchCatListReducer from "./FetchCatListReducer";

const Reducer = combineReducers({
  counterReducer: CounterReducer,
  fetchCatListReducer: FetchCatListReducer,
});

export default Reducer;
