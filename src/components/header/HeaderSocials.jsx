import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/agbo-agnes-0ba0a7224'
        target='_blank'
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/Agnestreasure2' target='_blank'>
        <BsGithub />
      </a>
      <a href='https://twitter.com/agnestreasure2' target='_blank'>
        <BsTwitter />
      </a>
    
    </div>
  );
};

export default HeaderSocials;
