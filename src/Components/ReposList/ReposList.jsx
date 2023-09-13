import React, { useEffect } from 'react';
import {
  addSelectedRepos,
  fetchingDataList,
  pageIncrement,
} from '../../Redux/actionCreators';
import { useInView } from 'react-intersection-observer';
import { repositoriesListSelector } from '../../Redux/selectors';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import Constants from '../../Constants/Constants';
import ModalWindow from '../ModalWindow/ModalWindow';
import PropTypes from 'prop-types';

const ReposList = ({ userName }) => {
  const { navigate, dispatch, useSelector } = Constants();
  const reposList = useSelector(repositoriesListSelector);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      dispatch(pageIncrement);
      dispatch(fetchingDataList(userName));
    } else {
      return;
    }
  }, [inView]);

  const handleReposNameInParams = (e) => {
    const text = e.target.textContent;
    dispatch(addSelectedRepos(text));
    navigate(`/repos/${text}`);
    <ModalWindow />;
  };

  return (
    <>
      <Typography variant="h3">Repositories List</Typography>
      {reposList.map((listItem) => {
        return (
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Card
              sx={{ width: '345px', marginTop: '20px', height: '100%' }}
              ref={ref}
            >
              <CardActionArea
                onClick={handleReposNameInParams}
                sx={{ display: 'flex', alignItems: 'center', height: '200px' }}
                key={listItem.node_id}
              >
                <CardMedia
                  sx={{ width: '50px', height: '50px' }}
                  loading="lazy"
                  component="img"
                  height="140"
                  image="http://httpbin.org/image/png"
                  alt="pig img"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {listItem.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Container>
        );
      })}
    </>
  );
};

export default ReposList;

ReposList.propTypes = {
  userName: PropTypes.string,
};
