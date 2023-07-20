import React from "react";
import "./Experience.css";
import { HiBadgeCheck } from "react-icons/hi";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2> My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development/Other Skills</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>ReactJs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>ReactNative</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Creative Problem Solving</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Critical Thinking</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Teamwork</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Communication</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Team Management</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Self Learning</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Leadership</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Team Coordination</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Team Spirit</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>React Native Developer</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Components</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>JSX Syntax</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>State Management</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>React Navigation</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>API Integration</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>FireBase Integration</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Google Integration</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/*  */}
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>
                  Building cross-platform apps (iOS & Andriod) 
                  using React Native.
                </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
