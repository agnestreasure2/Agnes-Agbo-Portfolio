import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolioo.jpeg";
import IMG2 from "../../assets/portfolioo.jpeg";
import IMG3 from "../../assets/portfolioo.jpeg";
import IMG4 from "../../assets/portfolioo.jpeg";


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>
           A food ordering and delivering app where you get to order
           food at your convineint and have it delivered at your doorstep
           or any location of your choice
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://expo.dev/artifacts/eas/bP2ngDbCBGKACnuLnsjgKM.apk'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              CHOWNOW MEALYAPP
            </a>
            <a
              href='https://expo.dev/artifacts/eas/bP2ngDbCBGKACnuLnsjgKM.apk'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Project
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
