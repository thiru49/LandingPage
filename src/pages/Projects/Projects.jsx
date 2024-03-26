import React from 'react';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import { projects } from '../../constants';
import './project.css'
const Projects = () => {
  return (
    <div>
      <Heading>Our</Heading>
      <h1 className='projects-heading'>Projects</h1>
      <ProjectsList/>
    </div>
  );
}

const ProjectsList = () => {
  return (
    <ul className='projects-list'>
      {projects.map((item, index) => (
        <ProjectsListItems key={index} item={item} />
      ))}
    </ul>
  );
}

const ProjectsListItems = ({ item }) => {
  return (
    <li className='project-item'>
      <section className='project-image-section'>
        <img src={item.image} alt="" className='project-image' />
      </section>
      <section className='project-details-section'>
        <Heading h='small' className='project-title'>
          {item.title}
        </Heading>
        <p className="project-description">
          {item.des}
        </p>
        <Button name='VIEW MORE' img='leftArow' color='orange' /> 
      </section>
    </li>
  );
}

export default Projects;
