export const ADD_NEW_STUDENT = "ADD_NEW_STUDENT";
export const SEARCH_STUDENT_BY_NAME = "SEARCH_STUDENT_BY_NAME";
export const UPDATE_STUDENT_DETAIL = "UPDATE_STUDENT_DETAIL";
export const DELETE_STUDENT_DETAIL = "DELETE_STUDENT_DETAIL";

export const searchStudentByNameAction = (payload) => {
  return {
    type: SEARCH_STUDENT_BY_NAME,
    payload,
  };
};

export const addNewStudentAction = (payload) => {
  console.log("addNewStudentAction called", payload);
  return {
    type: ADD_NEW_STUDENT,
    payload,
  };
};

export const updateStudentDetailAction = (payload) => {
  console.log("updateStudentDetailAction called", payload);
  return {
    type: UPDATE_STUDENT_DETAIL,
    payload,
  };
};
export const deleteStudentDetailAction = (payload) => {
  return {
    type: DELETE_STUDENT_DETAIL,
    payload,
  };
};
