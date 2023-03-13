// clubing all sagas together
import { all, fork } from "redux-saga/effects";
import FetchCatListSaga from "./FetchCatListSaga";

export default function* rootSaga() {
  yield all([fork(FetchCatListSaga)]);
}
