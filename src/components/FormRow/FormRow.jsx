import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './form.css'

function FormRow({ name }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`form-row ${focused ? 'focused' : ''}`}>
      <label className={`form-label ${focused ? 'focused-label' : ''}`} htmlFor={name}>
        {name}
      </label>
      {name === 'Message' ? (
        <textarea
          id={name}
          className="form-input"
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (!e.target.value) {
              setFocused(false);
            }
          }}
        />
      ) : (
        <input
          id={name}
          type="text"
          className="form-input"
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (!e.target.value) {
              setFocused(false);
            }
          }}
        />
      )}
    </div>
  );
}

FormRow.prototype = {
  name:PropTypes.string.isRequired
}

export default FormRow;
