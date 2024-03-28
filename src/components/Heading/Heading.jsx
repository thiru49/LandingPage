import React from 'react';
import PropTypes from 'prop-types'
import './heading.css'

const Heading = ({ children, size,style }) => {
  return (
    <h1 className={`heading ${size === 'small' ? 'small-heading' : 'large-heading'}`} style={style}>
      {children}
    </h1>
  );
}

Heading.prototype = {
  size:PropTypes.string,
  style:PropTypes.object
}
export default Heading;
