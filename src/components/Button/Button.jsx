import React from 'react';
import './button.css'
function Button({ img, name, color }) {
  return (
    <button className={`button ${color === 'black' ? 'black' : 'white'}`}>
      {name && <span>{name}</span>}
      {img === 'leftArow' ? <p>&rarr;</p> : <p>&larr;</p>}
    </button>
  );
}

export default Button;
