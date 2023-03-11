import { APICaller } from "../../Utility/APICaller";

export const FETCH_CAT_LIST = "FETCH_CAT_LIST";
export const FETCH_CAT_LIST_SUCCESSFULL = "FETCH_CAT_LIST_SUCCESSFULL";
export const FETCH_CAT_LIST_ERROR = "FETCH_CAT_LIST_ERROR";

export const fetchCatListAction = (payload) => {
  // thunk middleware
  return (dispatch) => {
    APICaller(payload)
      .then((res) => {
        console.log("succes of response of API", res);
        dispatch(fetchCatListSuccessfullAction(res?.data));
      })
      .catch((err) => {
        dispatch(fetchCatListFailureAction());
        console.log("error", err);
      });
  };
};

export const fetchCatListSuccessfullAction = (payload) => {
  console.log("fetchCatListSuccessfullAction");
  return {
    type: FETCH_CAT_LIST_SUCCESSFULL,
    payload,
  };
};

export const fetchCatListFailureAction = () => {
  console.log("fetchCatListFailureAction");
  return {
    type: FETCH_CAT_LIST_ERROR,
  };
};
