import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Contact = () => {
  return (
    <>

    <div className="container contact" id="contact">

      <h1>Contract ME</h1>
      <div className="contract-icon"

data-aos="zoom-in-up"
data-aos-duration="1000"
      
      
      >
        <a href="https://www.google.com" target="_blank"className="items">
          <FaInstagram className='icons'/>
        </a>
        <a href="https://www.google.com" target="_blank"className="items">
          <FaFacebook className='icons'/>
        </a>
        <a href="https://www.google.com" target="_blank"className="items">
          <FaLinkedin className='icons'/>
        </a>
        <a href="https://www.google.com" target="_blank"className="items">
          <FaGithubSquare className='icons'/>
        </a>
        <a href="https://www.google.com" target="_blank"className="items">
          <FaGithubSquare className='icons' />
        </a>

        <a href="mailto:mirzahasanlimon619@gmail.com" target="_blank"className="items">
          <SiGmail className='icons'/>
        </a>
      </div>
    </div>
    
    
    </>
  )
}

export default Contact