import {
  ADD_IMG,
  ADD_REPOS,
  GET_USER_NAME,
  SHOW_PROGRESS,
} from './actionCreators';

const initialState = {
  showProgress: false,
  userName: '',
  img: '',
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
    case ADD_IMG: {
      return {
        ...state,
        img: action.payload,
      };
    }
    case ADD_REPOS:
      return {
        ...state,
        userRepositories: action.payload,
        showProgress: false,
      };

    default:
      return state;
  }
};
export default usersReducer;
