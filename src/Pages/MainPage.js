import React from 'react';
import Title from '../Components/Title/Title';
import ReposList from '../Components/ReposList/ReposList.jsx';
import { useSelector } from 'react-redux';
import { userNameSelector } from '../Redux/selectors';
import { Container } from '@mui/material';

const MainPage = () => {
  const userName = useSelector(userNameSelector);

  return (
    <Container
      maxWidth="xl"
      className="main-page"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Title userName={userName} />
      <ReposList userName={userName} />
    </Container>
  );
};

export default MainPage;
