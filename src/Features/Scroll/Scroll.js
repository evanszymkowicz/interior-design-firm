import React from 'react';

const Scroll = (props) => (
  <div style={{ overflowY: 'scroll', width: '100%', height: '350px' }}>
    {props.children}
  </div>
);

export default Scroll;
