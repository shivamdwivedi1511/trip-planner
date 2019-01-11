import React from 'react'

export default function Plan(props) {
    // let color=props.color[Math.floor((Math.random())*7)]
    let elename=`card-panel black`
  return (
    <div>
       <div className="row">
    <div className="col s12 m12 " style={{opacity:'0.4'}}>
      <div className={elename} style={{borderRadius:'10px'}} >
      <h5 className='white-text' >{props.name}</h5>
        <span className="white-text">{props.details}
        </span>
      </div>
    </div>
    
  </div>
           
    </div>
  )
}
