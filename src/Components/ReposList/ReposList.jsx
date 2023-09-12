import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingDataList, pageIncrement } from '../../Redux/actionCreators';
import { useInView } from 'react-intersection-observer';
import {
  fullSelector,
  repositoriesListSelector,
  showProgressSelector,
} from '../../Redux/selectors';
import Constants from '../../Constants/Contastans';
import './ReposList.css';
// import InfiniteScroll from 'redux-infinite-scroll';

const ReposList = ({ userName }) => {
  // const { dispatch, useSelector } = Constants();
  const stateFull = useSelector(fullSelector);
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
            <li
              ref={ref}
              onClick={(e) => console.log(e.target.textContent)}
              style={{ marginTop: '20px', lineHeight: '30px' }}
              key={listItem.node_id}
            >
              <img
                loading="lazy"
                style={{
                  width: '30px',
                  height: '30px',
                  marginRight: '10px',
                }}
                src="http://httpbin.org/image/png
          "
                className="visible"
                alt="img"
              />

              {listItem.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReposList;
