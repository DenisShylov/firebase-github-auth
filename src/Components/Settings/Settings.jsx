import React from 'react';
import { useSelector } from 'react-redux';
import { userNameSelector } from '../../Redux/selectors';

const Settings = () => {
  const userName = useSelector(userNameSelector);
  return <div>{userName}</div>;
};

export default Settings;
