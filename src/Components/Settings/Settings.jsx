import React from 'react';
import { userNameSelector } from '../../Redux/selectors';
import { Container, Typography } from '@mui/material';
import Constants from '../../Constants/Constants';

const Settings = () => {
  const { useSelector } = Constants();
  const userName = useSelector(userNameSelector);
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', height: '100vh' }}>
      <Typography align="center" sx={{ margin: 'auto', fontSize: '30px' }}>
        {userName}
      </Typography>
    </Container>
  );
};

export default Settings;
