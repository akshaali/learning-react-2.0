import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import Reducer from "./Reducers";
import rootSaga from "./Saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: Reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
