import getReposList from '../Gateway/GetReposList';

export const SHOW_PROGRESS = 'SHOW_PROGRESS';
export const ADD_REPOS = 'ADD_REPOS';
export const GET_USER_NAME = 'GET_USER_NAME';
export const ADD_IMG = 'ADD_IMG';

export const showProgress = () => {
  return {
    type: SHOW_PROGRESS,
  };
};

export const getUserName = (userName) => {
  return {
    type: GET_USER_NAME,
    payload: userName,
  };
};

export const addImage = (url) => {
  return {
    type: ADD_IMG,
    payload: url,
  };
};

export const addListRepositories = (data) => {
  return {
    type: ADD_REPOS,
    payload: data,
  };
};

export const fetchingDataList = (userName, url) => {
  return async (dispatch) => {
    dispatch(showProgress());
    dispatch(addListRepositories(await getReposList(userName)));
    // dispatch(addImage(url));
  };
};
