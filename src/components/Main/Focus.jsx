import React from 'react';
import Heading from '../Heading/Heading';
import { content } from '../../constants';
import Section from '../Section/Section';

import './focus.css'

const Focus = () => {
  return (

      <div className='focus-container'>
        <Heading>Main Focus/Mission Statement</Heading>
        <div className='sections-container'>
          <Section number={1} para={content.para2} />
          <Section number={2} para={content.para3} />
        </div>
      </div>

  );
}

export default Focus;
