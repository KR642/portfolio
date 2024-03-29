import React from 'react'

const Qualification = () => {
  return (
    <section>
        <div className='p-10'>
            <p className='text-text min-[320px]:text-3xl md:text-[2.5rem] sm:text-[2rem] lg:text-[3rem]'>QUALIFICATION</p>
        </div>
        <div className='flex flex-row justify-center'>
          <ul className="steps steps-vertical h-[30rem]">
            <li data-content='' className="step step-primary ">
              <div className='flex flex-col justify-start items-start'>
                <p className='min-[320px]:text-md md:text-xl'>MSc Computer Science</p>
                <p className='min-[320px]:text-sm md:text-md'>Middlesex University, London</p>
                <p className='min-[320px]:text-sm md:text-md'>2022-2023</p>
              </div>
            </li>

            <li data-content='' className="step step-primary">
              <div className='flex flex-col justify-start items-start '>
                <p className='min-[320px]:text-md md:text-xl'>B.Voc Software Development</p>
                <p className='min-[320px]:text-sm md:text-md '>St. Teresa&apos;s College </p>
                <p className='min-[320px]:text-sm md:text-md'>2017-2020</p>
              </div>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default Qualification