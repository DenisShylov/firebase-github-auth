import React, { useEffect } from 'react';
import { fetchingDataList, pageIncrement } from '../../Redux/actionCreators';
import { useInView } from 'react-intersection-observer';
import { repositoriesListSelector } from '../../Redux/selectors';
import { Container, Typography } from '@mui/material';
import Constants from '../../Constants/Constants';

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
    navigate(`/repos/${e.target.textContent}`);
  };

  return (
    <>
      <Typography variant="h3">Repositories List</Typography>
      <ul
        style={{
          height: '250px',
          overflowY: ' scroll',
          width: '300px',
          listStyleType: 'none',
        }}
      >
        {reposList.map((listItem) => {
          return (
            <Container>
              <li
                ref={ref}
                onClick={handleReposNameInParams}
                style={{
                  cursor: 'pointer',
                  marginTop: '20px',
                  lineHeight: '30px',
                }}
                key={listItem.node_id}
              >
                <img
                  loading="lazy"
                  style={{
                    width: '30px',
                    height: '30px',
                    marginRight: '10px',
                  }}
                  src="http://httpbin.org/image/png"
                  alt="img"
                />
                {listItem.name}
              </li>
            </Container>
          );
        })}
      </ul>
    </>
  );
};

export default ReposList;
