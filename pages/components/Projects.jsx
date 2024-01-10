import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <section>
        <div className='p-10'>
            <p className='text-text min-[320px]:text-3xl md:text-[2.5rem] sm:text-[2rem] lg:text-[3rem]'>PROJECTS</p>
        </div>
        <div className='flex flex-row flex-wrap  p-10 justify-around'>

        <Card url="to-cap.png" title="TO-CAP" 
          desc1="TO-CAP (Teresa's Open Course Allocation Portal) showcases my proficiency in developing robust web applications. At St. Teresa's College (Autonomous), this project tackles the intricate task of allocating open courses for fifth-semester students."
           desc2="Built on Core PHP and MySQL, TO-CAP seamlessly integrates student preferences and academic performance data from previous exams."
           project="https://teresas.ac.in/open-course-allocation/"
           />

          <Card url="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Payment-request processing PWA" 
          desc1="I developed two prototypes of a payment-request PWA using Flutter and NextJS to analyze framework performance. The goal was to redefine how users effortlessly manage finances. The web prototype, a Progressive Web App, offers a smooth, native-like experience for tracking expenses and sending payment requests securely."
           desc2="Prioritizing data security, the app uses AES and a Quantum random number generator, ensuring confidentiality of bank details."
           project="https://kr642.github.io/"
           code="https://github.com/KR642/Flutter-Payment-code"
           />
          
          <Card url="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Electronic Health Record System using Blockchain" 
          desc1="Developed a Hyperledger Composer and Node.js application for a decentralized Electronic Health Record (EHR) system. Ensuring data availability, the system allows doctors to securely enter and manage patient medical history, prescriptions, and treatment records on the blockchain."
          desc2="Admin, doctors, and pharmacies collaborate seamlessly to enhance patient care and prevent fraudulent events in healthcare."
          code = "https://github.com/KR642/blockchain-emr"
          />
          
          </div>

          <div className='flex flex-row flex-wrap  p-10 justify-around'>          
          <Card url="https://images.unsplash.com/photo-1676907820153-2b61de2b9daf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Electronic Health Record System using Blockchain" 
          desc1="Crafted a blockchain project using Solidity for smart contracts, React.js for the front end, and Web3, employing Test-Driven Development (TDD) methods with Chai.js. The game inventory and reward system, implementing an ERC20 token standard, features an Initial Coin Offering (ICO) contract on the Ethereum blockchain."
          desc2="This platform incentivizes players with tokens based on performance, enabling them to enhance gameplay by purchasing in-game inventories using tokens. The system, involving game owner, admin, developers, and players, ensures secure transactions and special privileges for admin and owner to pause or unpause transactions for enhanced security."
          code = "https://github.com/KR642/Game-Inventory-ERC20"
          />
          
        
          <Card url="https://images.unsplash.com/photo-1632032858061-b321b3c1d52b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Concerto Game" 
          desc1 = "A desktop application for playing the game card game 'Concerto' by David Parlett using python Tkinter library."
          
           code="https://github.com/KR642/ConcertoPython"
           />
            <Card url="https://unsplash.com/photos/cup-of-brown-coffee-1UKx5_hhFLA" 
          desc1 = "React UI inspired and copied from the 'Coffee shop Landing Page' by Amit Goyani. Build using Vite+React with CSS."
          project = "https://github.com/KR642/Coffee-ReactUI-CSS"
           code="https://kr642.github.io/Coffee-ReactUI-CSS/"
           />
          </div>
    </section>
  )
}

export default Projects