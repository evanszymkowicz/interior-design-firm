import React from 'react';

const ScrollToTop = (props) => (
  <div style={{
    overflowY: 'Scroll',
    width: '100%',
    height: '350px',
  }}
  >
    {props.children}
  </div>
);

export default ScrollToTop;
