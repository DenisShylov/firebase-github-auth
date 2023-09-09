import React from 'react';
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebaseConfig';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  fetchingDataList,
  getUserName,
  showProgress,
} from '../../Redux/actionCreators';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGithub = async () => {
    await signInWithPopup(auth, new GithubAuthProvider())
      .then((res) => {
        const userName = res.user.reloadUserInfo.screenName;
        if (res) {
          dispatch(getUserName(userName));
          dispatch(fetchingDataList(userName));
          dispatch(showProgress());
          setTimeout(() => navigate('/repos'), 1400);
        }
      })
      .catch((error) => console.log('Error: ', error));
  };
  // const signOutWithGithub = async () => {
  //   await signOut(auth);
  //   setData('out');
  //   setTimeout(() => console.log('out', data), 1500);
  // };
  return (
    <div>
      <Button
        onClick={signInWithGithub}
        variant="outlined"
        style={{ borderWidth: '3px' }}
      >
        Sign In with Github
      </Button>
    </div>
  );
};

export default SignIn;
