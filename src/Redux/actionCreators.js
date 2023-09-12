import getReposList from '../Gateway/GetReposList';

export const IS_AUTH = 'IS_AUTH';
export const SHOW_PROGRESS = 'SHOW_PROGRESS';
export const ADD_REPOS = 'ADD_REPOS';
export const GET_USER_NAME = 'GET_USER_NAME';
export const REMOVE_DATA = 'REMOVE_DATA';
export const PAGE_INCREMENT = 'PAGE_INCREMENT';
export const RESPONSE_FULL = 'RESPONSE_FULL';

export const isAuth = () => {
  return {
    type: IS_AUTH,
  };
};
export const showProgress = () => {
  return {
    type: SHOW_PROGRESS,
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

export const addListRepositories = (data) => {
  return {
    type: ADD_REPOS,
    payload: data,
  };
};

export const fetchingDataList = (userName) => {
  return async (dispatch, getState) => {
    dispatch(showProgress());
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
