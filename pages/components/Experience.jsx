import React from 'react'

const Experience = () => {
  return (
    <section>
        <div className='p-10'>
            <p className='text-text min-[320px]:text-3xl md:text-[2.5rem] sm:text-[2rem] lg:text-[3rem]'>EXPERIENCE</p>
        </div>
        <div className='flex flex-row justify-center'>
          <ul className="steps steps-vertical h-[30rem]">

          <li data-content='' className="step step-primary ">
              <div className='flex flex-col justify-start items-start'>
                <p className='min-[320px]:text-md md:text-xl'>Coding Tutor</p>
                <p className='min-[320px]:text-sm md:text-md'>Blue Shift Education, London</p>
                <p className='min-[320px]:text-sm md:text-md'>2023-present</p>
              </div>
            </li>

            <li data-content='' className="step step-primary ">
              <div className='flex flex-col justify-start items-start'>
                <p className='min-[320px]:text-md md:text-xl'>ICT Teacher</p>
                <p className='min-[320px]:text-sm md:text-md'>Primary PPA Cover, London</p>
                <p className='min-[320px]:text-sm md:text-md'>2023</p>
              </div>
            </li> 
            
            <li data-content='' className="step step-primary ">
              <div className='flex flex-col justify-start items-start'>
                <p className='min-[320px]:text-md md:text-xl'>Subject Tutor</p>
                <p className='min-[320px]:text-sm md:text-md'>Oxford Summer Courses, London</p>
                <p className='min-[320px]:text-sm md:text-md'>2023</p>
              </div>
            </li> 
            

            <li data-content='' className="step step-primary">
              <div className='flex flex-col justify-start items-start'>
                <p className='min-[320px]:text-md md:text-xl'>Web Developer </p>
                <p className='min-[320px]:text-sm md:text-md'>Tata Consultancy Services</p>
                <p className='min-[320px]:text-sm md:text-md'>2020-2022</p>
              </div>
            </li>

            <li data-content='' className="step step-primary ">
              <div className='flex flex-col justify-start items-start'>
                <p className='min-[320px]:text-md md:text-xl'>Web Development Intern</p>
                <p className='min-[320px]:text-sm md:text-md'>Spectrum Softtech Solutions, Kochi</p>
                <p className='min-[320px]:text-sm md:text-md'>2019-2020</p>
              </div>
            </li> 

            <li data-content='' className="step step-primary ">
              <div className='flex flex-col justify-start items-start'>
                <p className='min-[320px]:text-md md:text-xl'>Web Development Intern</p>
                <p className='min-[320px]:text-sm md:text-md'>RISS Technologies, Kochi</p>
                <p className='min-[320px]:text-sm md:text-md'>2019</p>
              </div>
            </li> 
          </ul>
        </div>
    </section>
  )
}

export default Experience