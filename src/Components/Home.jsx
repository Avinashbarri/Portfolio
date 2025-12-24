import './Home.css'
import React from "react";
import About from "./About";
import Skills from './Skills';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';
import { use } from 'react';
function Home() {
   const navigate=useNavigate();
   return (
      <>
         <div className="homecontainer">
            <div className="homeleft">
               Hi,i am Avinash
               <div> and i am a passionated</div>
               <span id="des"> Front-end developer</span>
               <div className="btncontainer">
                  <a href="InfosysResume.pdf"  download className="btn">Download Resume </a>
                  <button className="btn" onClick={()=>
                     {navigate('/contact')}}>Contact Me</button>
               </div>
            </div>
            <div className="homeright">
               <img src="div2.jpg" alt="" />
            </div>
         </div>
         <About/>
         <Skills/>
         <Experience/>
         <Project/>
         <Contact/>
      </>
   )
}
export default Home;