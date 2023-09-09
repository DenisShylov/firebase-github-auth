import React from 'react';

const RepositoriesList = ({ list }) => {
  return (
    <ul>
      {list.map(({ id, name }) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
};

export default RepositoriesList;
