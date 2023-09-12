import {
  ADD_REPOS,
  GET_USER_NAME,
  IS_AUTH,
  PAGE_INCREMENT,
  REMOVE_DATA,
  RESPONSE_FULL,
} from './actionCreators';

const initialState = {
  userName: '',
  currentPage: 1,
  isAuth: false,
  userRepositories: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_NAME: {
      return { ...state, userName: action.payload };
    }
    case IS_AUTH: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case RESPONSE_FULL: {
      return {
        ...state,
      };
    }
    case PAGE_INCREMENT: {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }
    case ADD_REPOS:
      return {
        ...state,
        userRepositories: [...state.userRepositories, ...action.payload],
      };
    case REMOVE_DATA: {
      return {
        ...state,
        userName: '',
        currentPage: 1,
        userRepositories: [],
        isAuth: false,
      };
    }
    default:
      return state;
  }
};
export default usersReducer;
