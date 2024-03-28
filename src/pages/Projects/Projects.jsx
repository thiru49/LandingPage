import React, { Children } from 'react';
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
        <ProjectsListItems key={index} item={item}>
          <Card item={item}/>
        </ProjectsListItems>
      ))}
    </ul>
  );
}

const ProjectsListItems = ({ item ,children}) => {
  return (
    <li className='project-item'>
      <section className='project-image-section'>
        <img src={item.image} alt="" className='project-image' />
      </section>
      {children}
    </li>
  );
}

const Card = ({item})=>{
   return(
    <section className='project-details-section'>
    <Heading h='small' className='project-title'>
      {item.title}
    </Heading>
    <p className="project-description">
      {item.des}
    </p>
    <div>
    <Button name='VIEW MORE' icon='rightArow'/> 
    </div>
    
  </section>
   )
}

export default Projects;
