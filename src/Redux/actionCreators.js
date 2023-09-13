import getReposList from '../Gateway/GetReposList';

export const IS_AUTH = 'IS_AUTH';
export const ADD_REPOS = 'ADD_REPOS';
export const GET_USER_NAME = 'GET_USER_NAME';
export const REMOVE_DATA = 'REMOVE_DATA';
export const PAGE_INCREMENT = 'PAGE_INCREMENT';
export const RESPONSE_FULL = 'RESPONSE_FULL';
export const SELECTED_REPOS = 'SELECTED_REPOS';
export const CLEAN_SELECTED_REPOS = 'CLEAN_SELECTED_REPOS';

export const isAuth = () => {
  return {
    type: IS_AUTH,
  };
};

export const pageIncrement = () => {
  return { type: PAGE_INCREMENT };
};

export const responseFull = () => {
  return {
    type: RESPONSE_FULL,
  };
};

export const getUserName = (userName) => {
  return {
    type: GET_USER_NAME,
    payload: userName,
  };
};

export const addSelectedRepos = (name) => {
  return {
    type: SELECTED_REPOS,
    payload: name,
  };
};

export const clearSelectedRepos = () => {
  return {
    type: CLEAN_SELECTED_REPOS,
  };
};

export const addListRepositories = (data) => {
  return {
    type: ADD_REPOS,
    payload: data,
  };
};

export const fetchingDataList = (userName) => {
  return async (dispatch, getState) => {
    const reposList = dispatch(
      addListRepositories(
        await getReposList(userName, getState().users.currentPage)
      )
    );
    if (reposList.length === 0) {
      return;
    }
    dispatch(pageIncrement());
  };
};

export const removeData = () => {
  return {
    type: REMOVE_DATA,
  };
};
