import {
  ADD_REPOS,
  GET_USER_NAME,
  IS_AUTH,
  PAGE_INCREMENT,
  REMOVE_DATA,
  RESPONSE_FULL,
  SHOW_PROGRESS,
} from './actionCreators';

const initialState = {
  showProgress: false,
  userName: '',
  full: false,
  currentPage: 1,
  isAuth: false,
  userRepositories: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PROGRESS: {
      return { ...state, showProgress: true };
    }
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
        full: true,
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
        showProgress: false,
      };
    case REMOVE_DATA: {
      return {
        ...state,
        userName: '',
        full: false,
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
