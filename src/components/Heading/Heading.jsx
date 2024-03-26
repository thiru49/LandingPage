import React from 'react';
import './heading.css'

const Heading = ({ children, h }) => {
  return (
    <h1 className={`heading ${h === 'small' ? 'small-heading' : 'large-heading'}`}>
      {children}
    </h1>
  );
}

export default Heading;
