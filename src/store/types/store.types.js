//const name = "GLOBAL";

export const TypeStore = {
  state: {
    LENGUAGE: `GLOBAL:LANGUAGE`,
    STUDENTS: `GLOBAL:STUDENTS`,
    PSTUDENT: `GLOBAL:PSTUDENT`,
    PSTUDENT1: `GLOBAL:PSTUDENT1`
  },
  actions: {
    GET_STUDENTS: `GLOBAL:GET_STUDENTS`,
    POST_STUDENTS: `GLOBAL:POST_STUDENTS`,
    DELETE_STUDENTS: `GLOBAL:DELETE_STUDENTS`,
    PUT_STUDENTS: `GLOBAL:PUT_STUDENTS`
  },
  mutations: {
    SET_LANGUAGE: `GLOBAL:SET_LANGUAGE`,
    SET_STUDENTS: `GLOBAL:GET_STUDENTS`,
    SET_PSTUDENT: `GLOBAL:POST_STUDENTS`,
    SET_PSTUDENT1: `GLOBAL:DELETE_STUDENTS`,
    SET_PSTUDENT2: `GLOBAL:PUT_STUDENTS`
  }
};
