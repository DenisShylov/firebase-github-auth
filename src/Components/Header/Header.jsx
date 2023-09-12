import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../Firebase/firebaseConfig';
import Constants from '../../Constants/Constants';
import { removeData } from '../../Redux/actionCreators';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';

const Header = () => {
  const { navigate, dispatch } = Constants();
  const handleBackHome = () => {
    navigate('/repos');
  };
  const signOutWithGithub = async () => {
    await signOut(auth);
    dispatch(removeData());
    navigate('/');
    localStorage.clear();
  };

  const handleSettings = () => {
    navigate('../settings');
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" onClick={handleBackHome}>
            Test Task App
          </Typography>
          <Box ml={'auto'} mr={3}>
            <Button variant="outlined" color="inherit" onClick={handleBackHome}>
              Home
            </Button>
          </Box>
          <Box mr={3}>
            <Button
              color="inherit"
              variant="outlined"
              onClick={signOutWithGithub}
            >
              Log Out
            </Button>
          </Box>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleSettings}
          >
            Settings
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
