import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Mobile App Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I build cross-platform mobile app (iOS & Andriod)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing user interfaces and user experiences (UI/UX) designs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Implementing navigation, routing and handling state management in the app.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Work within applicable standards, policies and regulatory
                guidelines to promote safe working environment.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Create plans and communicate deadlines to complete projects on
                time.
              </p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Deployment</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Deploy mobile application to app stores such as the Apple app store and Google play store</p>
            </li>
            
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Third-party Integration</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Integrating backend APIs and services with the mobile app.</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
