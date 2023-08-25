import React from "react";
import "./About.css";
import ME from "../../assets/Agnes.jpeg";
import { FaAward } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
      <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small> A year Working Experience</small>
            </article>
            <article className='about__card'>
              <RiUserStarFill className='about__icon' />
              <h5>Clients</h5>
              <small>Very satisfied clients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>well secured projects</small>
            </article>
          </div>
          <p>
          I am an experienced React Native developer with a year of hands-on experience.
          I'm Organized and dependable, successful at managing multiple priorities with a
          positive attitude. I always have the Willingness to take on added responsibilities to
          meet team goals. I'm Enthusiastic and eager to contribute to team success through hard work, 
          attention to details and with excellent organizational skills. I have a strong foundation 
          in JavaScript and a deep understanding of React principles. I'm Motivated to learn,
          grow and excel in the industry.
          
          </p>
          <a href='#contact' className='btn btn-primary'>
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
