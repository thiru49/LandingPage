import React from 'react';
import './section.css'

const Section = ({ number, para }) => {
  return (
    <section className='section-container'>
      <div className='section-content'>
        <h1 className='section-number'>{number}</h1>
        <p className='section-paragraph'>{para}</p>
      </div>
    </section>
  );
}

export default Section;
