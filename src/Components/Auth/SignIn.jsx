import React from 'react';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/firebaseConfig';
import Constants from '../../Constants/Constants';
import { Button, Container } from '@mui/material';
import {
  fetchingDataList,
  getUserName,
  isAuth,
} from '../../Redux/actionCreators';

const SignIn = () => {
  const { navigate, dispatch } = Constants();

  const signInWithGithub = async () => {
    await signInWithPopup(auth, new GithubAuthProvider())
      .then((res) => {
        const userName = res.user.reloadUserInfo.screenName;
        if (res) {
          dispatch(isAuth());
          dispatch(getUserName(userName));
          dispatch(fetchingDataList(userName));
          navigate('/repos');
        }
      })
      .catch((error) => console.log('Error: ', error));
  };

  return (
    <Container sx={{ display: 'flex', height: '100vh' }}>
      <Button
        sx={{ margin: 'auto', borderWidth: '3px' }}
        onClick={signInWithGithub}
        variant="outlined"
      >
        Sign In with Github
      </Button>
    </Container>
  );
};

export default SignIn;
