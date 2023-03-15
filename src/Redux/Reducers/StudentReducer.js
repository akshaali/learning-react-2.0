import {
  ADD_NEW_STUDENT,
  DELETE_STUDENT_DETAIL,
  SEARCH_STUDENT_BY_NAME,
  UPDATE_STUDENT_DETAIL,
} from "../Actions/StudentsAction";

const inititalState = {
  studentList: [],
  savedStudent: [],
  specificStudentDetails: {},
};

const StudentReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_NEW_STUDENT: {
      console.log("ADD_NEW_STUDENT reducer", state, action);
      return {
        ...state,
        studentList: [...state.studentList, action.payload],
        savedStudent: [...state.studentList, action.payload],
      };
    }
    case SEARCH_STUDENT_BY_NAME: {
      let updatedStudentList = [];
      if (!action?.payload.name) {
        updatedStudentList = state.savedStudent;
      } else {
        updatedStudentList = state.savedStudent.filter((item) =>
          item?.name.includes(action?.payload.name)
        );
      }
      return { ...state, studentList: updatedStudentList };
    }
    case UPDATE_STUDENT_DETAIL: {
      console.log("UPDATE_STUDENT_DETAIL reducer", state, action);
      const updatedStudentList = state.studentList.map((item) => {
        if (item?.id === action?.payload?.id) {
          return action?.payload;
        }
        return item;
      });
      return {
        ...state,
        studentList: updatedStudentList,
        savedStudent: updatedStudentList,
      };
    }
    case DELETE_STUDENT_DETAIL: {
      console.log("DELETE_STUDENT_DETAIL reducer", state, action);
      const updatedStudentList = state.studentList.filter(
        (item) => item?.id !== action?.payload.id
      );
      return {
        ...state,
        studentList: updatedStudentList,
        updatedStudentList: updatedStudentList,
      };
    }
    default: {
      return state;
    }
  }
};

export default StudentReducer;
