import React from 'react';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import { image15, image16, image17, image18, leftArow, rectangle17 } from '../../assets';
import './project.css'

const Projects = () => {
  return (

      <div className='projects-container'>
        <Heading>Our Projects</Heading>
        <section className='projects-section'>
          <div className='project'>
             <div className='project-content'>
                <div>
                  <h1 className='project-title'>Sample <br />Project</h1>
                  
                  <Button name='VIEW MORE' icon='rightArow' color='black' /> 
                </div>
          
                <img src={rectangle17} alt="" className='project-image' />
              </div>
              <div>
                 <img src={image15} alt="" srcSet="" />
              </div> 
          </div>
          <div className='project-image-container'>
            <div><img src={image16} alt="" className='project-image' /></div>
            <div><img src={image17} alt="" className='project-image' /></div>
            <div><img src={image18} alt="" className='project-image' /></div>
          </div>
        </section>
        <div className='view-projects-button'>
          <Button name='VIEW MORE' icon='rightArow' color='black'/>
        </div>
      </div>
  );
}

export default Projects;
