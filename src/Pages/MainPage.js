import React from 'react';
import Title from '../Components/Title/Title';
import ReposList from '../Components/ReposList/ReposList.jsx';
import { useSelector } from 'react-redux';
import { userNameSelector } from '../Redux/selectors';

const MainPage = () => {
  const userName = useSelector(userNameSelector);

  return (
    <div
      className="main-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {' '}
      <Title userName={userName} />
      <ReposList userName={userName} />
    </div>
  );
};

export default MainPage;
