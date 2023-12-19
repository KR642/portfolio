import React from 'react';
import {MdEmail} from 'react-icons/md';
import {AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="footer p-10 bg-second text-base-content flex w-full min-[320px]:flex-col md:flex-row justify-around">
  <nav>
    <header className="footer-title text-text">Services</header> 
    <a className="link link-hover text-text">Web Development</a> 
    <a className="link link-hover text-text">Project Management</a> 
    <a className="link link-hover text-text">API Integeration</a> 
  </nav> 

  <nav>
    <header className="footer-title text-text">Contact Me</header> 
    <div className='flex min-[320px]:flex-col md:flex-row justify-around w-full'>
    <a className='link link-hover' href="mailto:rkrishnapriya63@gmail.com?subject=Would%20Love%20to%20hire%20you" >  
            <MdEmail className='text-text text-4xl'></MdEmail> </a> 
            <a href="https://www.linkedin.com/in/krishnapriya-radhakrishnan/" target="_blank">  
            <AiFillLinkedin className='text-text text-4xl'></AiFillLinkedin> </a>
          
    </div>
      
  </nav> 
</footer>
  )
}

export default Footer