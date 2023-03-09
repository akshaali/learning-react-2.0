import {
  ADD_NEW_STUDENT,
  DELETE_STUDENT_DETAIL,
  GET_STUDENT_DETAILS,
  UPDATE_STUDENT_DETAIL,
} from "../Actions/StudentsAction";

const inititalState = {
  studentList: [],
  specificStudentDetails: {},
};

const StudentReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_NEW_STUDENT: {
      return { ...state };
    }
    case GET_STUDENT_DETAILS: {
      return { ...state };
    }
    case UPDATE_STUDENT_DETAIL: {
      return { ...state };
    }
    case DELETE_STUDENT_DETAIL: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default StudentReducer;
