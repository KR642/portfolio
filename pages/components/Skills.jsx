import React from 'react';
import {SiFigma,SiAdobexd , SiAdobe, SiJira ,SiAdobeillustrator, SiMysql, SiAdobephotoshop, SiPhp, SiPython, SiNextdotjs, SiCreatereactapp,SiTailwindcss, SiFirebase, SiBootstrap } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Skills = () => {
  return (
    <section>
        <div className='p-10'>
            <p className='text-text min-[320px]:text-3xl md:text-[2.5rem] sm:text-[2rem] lg:text-[3rem]'>SKILLS</p>
        </div>
        <div className='flex flex-col min-[320px]:flex-wrap md:flex-nowrap' id="parent">

        <div className='flex flex-row flex-wrap justify-around items-center w-full px-20 py-5' id='tech-skills'>
            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiNextdotjs className='text-4xl text-text '/>
            <p className='text-2xl text-text'>Next.js</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiCreatereactapp className='text-4xl text-text '/>
            <p className='text-2xl text-text'>React.js</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiTailwindcss className='text-4xl text-text'/>
            <p className='text-2xl text-text'>Tailwind</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiFirebase className='text-4xl text-text'/>
            <p className='text-2xl text-text'>Firebase</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiBootstrap  className='text-4xl text-text'/>
            <p className='text-2xl text-text'>Bootstrap</p>
            </div> 

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiAdobe  className='text-4xl text-text'/>
            <p className='text-2xl text-text'>AEM</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiPython  className='text-4xl text-text'/>
            <p className='text-2xl text-text'>Python</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <FaJava  className='text-4xl text-text'/>
            <p className='text-2xl text-text'>Java</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiPhp  className='text-4xl text-text'/>
            <p className='text-2xl text-text'>PHP</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiMysql  className='text-4xl text-text'/>
            <p className='text-2xl text-text'>MySQL</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiAdobephotoshop  className='text-4xl text-text'/>
            <p className='text-2xl text-text'>Photoshop</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiAdobeillustrator  className='text-4xl text-text'/>
            <p className='text-2xl text-text'>Illustrator</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiFigma  className='text-4xl text-text'/>
            <p className='text-2xl text-text'>Figma</p>
            </div>  

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiJira  className='text-4xl text-text'/>
            <p className='text-2xl text-text'>Jira</p>
            </div>   

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <SiAdobexd  className='text-4xl text-text'/>
            <p className='text-2xl text-text'>Adobe XD</p>
            </div>   
        </div>



        <div className='flex flex-row flex-wrap justify-around items-center  w-full px-20 py-5' id='soft-skills'>
            
            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <p className='text-2xl text-text'>Communication</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <p className='text-2xl text-text'>Team Work</p>
            </div>
            


            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <p className='text-2xl text-text'>Adaptability</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <p className='text-2xl text-text'>Time Management</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <p className='text-2xl text-text'>Problem Solving</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <p className='text-2xl text-text'>Mentoring</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <p className='text-2xl text-text'>Active Learning</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <p className='text-2xl text-text'>Critical Analysis</p>
            </div>

            <div className='flex flex-row justify-around items-center w-[150px] py-5'>
            <p className='text-2xl text-text'>Attention to Details</p>
            </div>

        </div>


        </div>
        
    </section>
  )
}

export default Skills