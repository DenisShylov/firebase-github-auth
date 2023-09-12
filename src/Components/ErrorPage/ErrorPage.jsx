import { Container, Typography } from '@mui/material';
import React from 'react';

const ErrorPage = () => {
  return (
    <Container sx={{ display: 'flex', height: '100vh' }}>
      <Typography sx={{ margin: 'auto' }}>
        You entered an invalid URL
      </Typography>
    </Container>
  );
};

export default ErrorPage;
