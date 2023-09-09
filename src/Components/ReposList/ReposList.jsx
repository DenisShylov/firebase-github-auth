import React, { useEffect, useState } from 'react';

const ReposList = ({ reposList }) => {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/denisshylov/repos?per_page=5').then(
      (res) => setPhoto(res.json())
    );
  }, []);
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    // return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e) => {
    console.log(e);
  };
  return (
    <ul
      onScroll={handleScroll}
      style={{
        height: '630px',
        overflowY: ' scroll',
      }}
    >
      {reposList.map((listItem) => {
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
