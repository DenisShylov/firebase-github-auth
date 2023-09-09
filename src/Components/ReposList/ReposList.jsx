import React, { useEffect, useState } from 'react';

const ReposList = ({ reposList }) => {
  const [page, setPage] = useState(1);
  const [repos, setRepos] = useState([]);
  const [fetching, setFetching] = useState(true);
  const BASE_URL = `https://api.github.com/users/DenisShylov/repos?per_page=5&page=${page}`;

  useEffect(() => {
    if (fetching) {
      fetch(BASE_URL)
        .then((res) => res.json())
        .then((repositories) => {
          setRepos([...repos, ...repositories]);
          setPage((prev) => prev + 1);
          // console.log(repositories);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.querySelector('ul').addEventListener('scroll', scrollHandler);

    return () =>
      document.querySelector('ul').removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.scrollHeight -
        (e.target.scrollTop +
          window.document.querySelector('ul').clientHeight) <
      10
    ) {
      setFetching(true);
    }
  };
  return (
    <ul
      style={{
        height: '100px',
        overflowY: ' scroll',
      }}
    >
      {repos.map((listItem) => {
        return (
          <>
            <li
              style={{ marginTop: '20px', lineHeight: '30px' }}
              key={listItem.id}
            >
              <img
                style={{ width: '30px', height: '30px', marginRight: '10px' }}
                src="http://httpbin.org/image/png
"
                alt="img"
              />
              {listItem.name}
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default ReposList;
