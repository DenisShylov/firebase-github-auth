import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/firebaseConfig';
import Constants from '../../Constants/Contastans';
import { removeData } from '../../Redux/actionCreators';

const Header = () => {
  const { navigate, dispatch } = Constants();
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
    <div>
      <Link to={'/repos'}>Home</Link>
      <button onClick={signOutWithGithub}>Log Out</button>
      <button onClick={handleSettings}>Settings</button>
    </div>
  );
};

export default Header;
