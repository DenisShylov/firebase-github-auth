import React from 'react';
import { userNameSelector } from '../../Redux/selectors';
import Constants from '../../Constants/Constants';
import ModalWindow from '../ModalWindow/ModalWindow';

const Settings = () => {
  const { useSelector } = Constants();
  const userName = useSelector(userNameSelector);
  return <ModalWindow userName={userName} />;
};

export default Settings;
