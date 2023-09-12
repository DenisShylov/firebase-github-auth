import { Container, Typography } from '@mui/material';
import React from 'react';

const Title = ({ userName }) => {
  return (
    <Container>
      <Typography
        align="center"
        sx={{ fontWeight: '700', fontSize: '28px' }}
        className="title"
      >
        {`User Name: ${userName}`}
      </Typography>
    </Container>
  );
};

export default Title;
