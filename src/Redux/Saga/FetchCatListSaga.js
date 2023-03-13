import { put, call, takeLatest } from "redux-saga/effects";
import {
  FETCH_CAT_LIST,
  fetchCatListSuccessfullAction,
  fetchCatListFailureAction,
} from "../Actions/FetchCatListActions";
import { APICaller } from "../../Utility/APICaller";

function* fetchCatListSaga({ payload }) {
  console.log("fetchCatListSaga", payload);
  try {
    const response = yield call(APICaller, payload);
    yield put(fetchCatListSuccessfullAction(response.data));
  } catch (e) {
    yield put(fetchCatListFailureAction(e));
  }
}

export default function* saga() {
  yield takeLatest(FETCH_CAT_LIST, fetchCatListSaga);
}
