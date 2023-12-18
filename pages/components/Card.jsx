import React from 'react'

const Card = (props) => {
  return (
    <div className="card w-96 bg-second shadow-xl my-5">
    <figure><img src={props.url}/></figure>
    <div className="card-body text-text">
      <h2 className="card-title">{props.title}</h2>
      <p>{props.desc1}</p>
      <p>{props.desc2}</p>
      {props.project && <a className='w-full' href={props.project}><button className='bg-ascent p-3 w-full rounded-lg flex items-center justify-center'>GO TO THE PROJECT</button></a>}

      {props.code && <a className='w-full' href={props.code}><button className=' border-2 border-ascent p-3 w-full rounded-lg flex items-center justify-center'>VIEW THE CODE</button></a>}

    </div>
  </div>
  )
}

export default Card