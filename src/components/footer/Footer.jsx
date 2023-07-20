import React from "react";
import "./Footer.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { BsMedium } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        AGBO AGNES
      </a>
      <ul className='permalinks'>
        <li>
          
          {" "}
          <a href='#'>Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href='#about'>About</a>{" "}
        </li>
        <li>
          {" "}
          <a href='#experience'>Experience</a>{" "}
        </li>
        <li>
          {" "}
          <a href='#services'>Services</a>{" "}
        </li>
        <li>
          {" "}
          <a href='#portfolio'>Portfolio</a>{" "}
        </li>
        <li>
          {" "}
          <a href='#testimonials'>Testimonials</a>{" "}
        </li>
        <li>
          {" "}
          <a href='#contact'>Contacts</a>{" "}
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/agbo-agnes-0ba0a7224'>
          {" "}
          <AiOutlineLinkedin />{" "}
        </a>
        <a href='https://github.com/Agnestreasure2'>
          {" "}
          <BsGithub />{" "}
        </a>
        <a href='https://twitter.com/agnestreasure2'>
          {" "}
          <GrTwitter />{" "}
        </a>
        <a href='https://t.me/deecentralized'>
          {" "}
          <FaTelegramPlane />{" "}
        </a>
        <a href='mailto:tagnesagbo6@gmail.com'>
          {" "}
          <MdOutlineEmail />{" "}
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; AGBO AGNES. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
