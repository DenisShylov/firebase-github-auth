import React from 'react';
import Title from '../Components/Title/Title';
import ReposList from '../Components/ReposList/ReposList.jsx';
import { useSelector } from 'react-redux';
import { repositoriesListSelector, userNameSelector } from '../Redux/selectors';

const MainPage = () => {
  const userName = useSelector(userNameSelector);
  const reposList = useSelector(repositoriesListSelector);

  return (
    <div
      className="main-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Title userName={userName} />
      <ReposList reposList={reposList} />
    </div>
  );
};

export default MainPage;
