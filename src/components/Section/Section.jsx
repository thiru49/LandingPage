import React from 'react';
import './section.css'

const Section = ({ number, para }) => {
  console.log(number)
  return (
    <section className='section-container'>
      <div className='section-content'>
        <div className='section-number'><img src={number} alt="" /></div>
        <p className='section-paragraph'>{para}</p>
      </div>
    </section>
  );
}

export default Section;
