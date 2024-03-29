import React from 'react'
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import { image15, image16, image17, image18, leftArow, rectangle17,  rectangle, rightArow, slideNumber,image12,rectangle8,rectangle10,rectangle9 } from '../../assets';
import FormRow from '../../components/FormRow/FormRow';
import { content } from '../../constants';
import Section from '../../components/Section/Section';
import './main.css';
import number1 from '../../assets/1.png'
import number2 from '../../assets/2.png'

const MainPage = () => {
  return (
  <>
    <main className='hero-container'>
      <section className='hero-section'>
        <div>
          <Heading className='project-heading' >PROJECT</Heading>
          <h1 className='title'>Lorum</h1>
        </div>
        <div className='button-container'>
          <Button name='' icon='leftArrow'/>
          <Button name='' icon='leftArow'/>
        </div>
        <div>
          <img src={slideNumber} alt="slideNumber" />
        </div>
      </section>
      <section className='relative-section'>
        <div className='image-container'>
          <img src={rectangle} alt="" className='image'/>
        </div>
        <div className='button-container'>
          <Button name="VIEW PROJECT" icon='rightArow'/>
        </div>
      </section>
    </main>
    <section className="about-container">
      <div className="image-container">
        <div className="image-column">
          <div>
            <img src={rectangle8} alt="" className="image" />
          </div>
          <div>
            <img src={rectangle10} alt="" className="image" />
          </div>
        </div>
        <div className="image-column2">
          <div>
            <img src={rectangle9} alt="" className="image" />
          </div>
        </div>
      </div>

      <div className="text-container">
        <section className="text-section">
          <Heading>About</Heading>
          <p className="paragraph">{content.para1}</p>
        </section>
        <section className="button-section">
          <Button name="READ MORE" icon='rightArow' />
        </section>
      </div>
    </section>
    <div className='focus-container'>
        <Heading>Main Focus/Mission Statement</Heading>
        <div className='sections-containers'>
          <Section number={number1} para={content.para2} />
          <Section number={number2} para={content.para3} />
        </div>
    </div>
    <div className='projects-container'>
        <Heading>Our Projects</Heading>
        <section className='projects-section'>
          <div className='project'>
             <div className='project-content'>
                <div>
                  <h1 className='project-title'>Sample <br />Project</h1>
                  <br/>
                  <Button name='VIEW MORE' icon='rightArow' color='black' className='button'/> 
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
    <section className='contact-section'>
        <Heading>Contact Us</Heading>
        <div className='contact-container'>
          <form className='contact-form'>
            <FormRow name='Name'/>
            <FormRow name='Phone Number'/>
            <FormRow name='E-mail'/>
            <FormRow name='Interested in'/>
            <FormRow name='essage'/>
          </form>
          <div className='contact-image-container'>
            <img src={image12} alt="" className='contact-image' />
          </div>
        </div>
        <div className='contact-button'>
          <Button name="SEND EMAIL" icon='rightArow' color='black'/>
        </div>
    </section>  
  </>
  )
}

export default MainPage