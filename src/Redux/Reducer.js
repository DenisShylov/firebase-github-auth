import {
  ADD_REPOS,
  CLEAN_SELECTED_REPOS,
  GET_USER_NAME,
  IS_AUTH,
  PAGE_INCREMENT,
  REMOVE_DATA,
  RESPONSE_FULL,
  SELECTED_REPOS,
} from './actionCreators';

const initialState = {
  userName: '',
  currentPage: 1,
  isAuth: false,
  userRepositories: [],
  selectRepos: false,
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
    case SELECTED_REPOS: {
      return {
        ...state,
        selectRepos: action.payload,
      };
    }
    case CLEAN_SELECTED_REPOS: {
      return {
        ...state,
        selectRepos: false,
      };
    }
    case REMOVE_DATA: {
      return {
        ...state,
        userName: '',
        currentPage: 1,
        userRepositories: [],
        isAuth: false,
        selectRepos: false,
      };
    }
    default:
      return state;
  }
};
export default usersReducer;
