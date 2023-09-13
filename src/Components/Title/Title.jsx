import { Container, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ userName }) => {
  return (
    <Container sx={{ marginTop: '200px' }}>
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

Title.propTypes = {
  userName: PropTypes.string,
};
