import { Box, Button, Typography, Modal } from '@mui/material';
import React, { useState } from 'react';
import Constants from '../../Constants/Constants';
import { selectReposSelector } from '../../Redux/selectors';
import { clearSelectedRepos } from '../../Redux/actionCreators';
import PropTypes from 'prop-types';

const ModalWindow = ({ userName }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const { navigate, useSelector, dispatch } = Constants();
  const selectedRepos = useSelector(selectReposSelector);
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    dispatch(clearSelectedRepos());
    navigate('/repos');
  };
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            User info for GitHub
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {!selectedRepos ? userName : selectedRepos}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ModalWindow;

ModalWindow.propTypes = {
  userName: PropTypes.string,
};
