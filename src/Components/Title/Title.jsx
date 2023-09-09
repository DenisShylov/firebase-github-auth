import React from 'react';

const Title = ({ userName }) => {
  return (
    <div style={{ fontSize: '40px', fontWeight: 700, fontFamily: 'monospace' }}>
      <span className="title">{userName}</span>
    </div>
  );
};

export default Title;
