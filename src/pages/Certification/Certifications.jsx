import React from 'react';
import Heading from '../../components/Heading/Heading';
import certificate from '../../assets/certificate.jpg';
import './certification.css'
const Certifications = () => {
  return (
    <div>
      <Heading>Company</Heading>
      <h1 className='certifications-heading'>Certifications</h1>
      <div className='certificates-container'>
        <img src={certificate} alt="" className='certificate-image'/>
      </div>
    </div>
  );
}

export default Certifications;
