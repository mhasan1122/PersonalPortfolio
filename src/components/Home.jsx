import React, { useEffect, useRef, useState } from 'react';
import pdf from '../pdf/resume.pdf';
import hero from './data/hero.json';
import Typed from 'typed.js';




const Home = () => {

  const typedRef =useRef(null)
  useEffect(()=>
  {
    const options ={
      strings:["Welcome to my profile","My name is Mirza Hasan","I am a full stack develpver"
    ,"Web Developer (React)"],
    typeSpeed:50,
    backSpeed:50,
    loop:true

    }

    const typed =new Typed(typedRef.current,options)

    return() =>{
      typed.destroy();
    };
  }, [] 
  );
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right"
            data-aos-duration="1000">
          <h1 ref={typedRef}>
           </h1>

          <a href={pdf} download="Mirza Hasan's resume.pdf" className="btn btn-outline-warning">Download CV</a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left"
            data-aos-duration="1000">
            <img src={require('../components/hero/limon.jpg')} alt="hero" />


          </div>


        </div>
      </div>

    </>
  )
}

export default Home