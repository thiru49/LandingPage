import React from 'react';
import Heading from '../../components/Heading/Heading';
import { gallery } from '../../constants';
import './gallery.css'
const Gallery = () => {
  return (
    <div>
      <Heading>Photo</Heading>
      <h1 className='gallery-heading'>Gallery</h1>
      <div className='gallery-grid'>
        {gallery.map((img, id) => (
          <div key={id} className='gallery-item'>
            <img src={img} className='gallery-image' alt={`Gallery Image ${id + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
