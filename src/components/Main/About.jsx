import React from "react";
import { content } from "../../constants";
import Button from "../Button/Button";
import { leftArow, rectangle10, rectangle8, rectangle9 } from "../../assets";
import Heading from "../Heading/Heading";
import "./about.css";

function About() {
 
  return (
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
  );
}

export default About;
