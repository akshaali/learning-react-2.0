import {
  FETCH_CAT_LIST_SUCCESSFULL,
  FETCH_CAT_LIST_ERROR,
} from "../Actions/FetchCatListActions";

const inititalState = {
  catList: [],
  error: false,
};

const FetchCatListReducer = (state = inititalState, action) => {
  switch (action.type) {
    case FETCH_CAT_LIST_SUCCESSFULL: {
      return { ...state, catlist: action.payload, error: false };
    }
    case FETCH_CAT_LIST_ERROR: {
      return { ...state, error: true };
    }
    default: {
      return state;
    }
  }
};

export default FetchCatListReducer;
