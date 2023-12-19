import React from 'react';
import {MdEmail} from 'react-icons/md';
import {AiFillLinkedin} from 'react-icons/ai'
const ContactMe = () => {
  return (
    <section>
        <div className='p-10'>
            <p className='text-text min-[320px]:text-3xl md:text-[2.5rem] sm:text-[2rem] lg:text-[3rem]'>CONTACT ME</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='flex flex-col justify-center'>
            <div className='flex flex-row justify-start w-full items-center'>
            <a href="mailto:rkrishnapriya63@gmail.com?subject=Would%20Love%20to%20hire%20you">  
            <MdEmail className='text-text text-4xl'></MdEmail> </a>
            <a href="mailto:rkrishnapriya63@gmail.com?subject=Would%20Love%20to%20hire%20you" > <p className='px-4 text-text'>rkrishnapriya63@gmail.com</p></a>
        </div>

        <div className='flex flex-row justify-start w-full items-center'>
            <a href="https://www.linkedin.com/in/krishnapriya-radhakrishnan/" target="_blank">  
            <AiFillLinkedin className='text-text text-4xl'></AiFillLinkedin> </a>
            <a href="https://www.linkedin.com/in/krishnapriya-radhakrishnan/" target="_blank"> <p className='px-4 text-text'>Krishnapriya Radhakrishnan</p></a>
        </div>
            </div>
        

        </div>
       
    </section>
  )
}

export default ContactMe