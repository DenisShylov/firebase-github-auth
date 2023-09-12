import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingDataList, pageIncrement } from '../../Redux/actionCreators';
import { useInView } from 'react-intersection-observer';
import { repositoriesListSelector } from '../../Redux/selectors';
import './ReposList.css';
import { useNavigate } from 'react-router-dom';

const ReposList = ({ userName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      <h1>Repositories List</h1>
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
            <div>
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
                  className="visible"
                  alt="img"
                />
                {listItem.name}
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ReposList;
