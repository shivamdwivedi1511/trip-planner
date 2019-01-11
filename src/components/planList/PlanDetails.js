import React from 'react'

export default function PlanDetails(props) {
    console.log(props)
  return (
    <div>
      
  <div className="row">
    <div className="col s12 m12 l12 " >
      <div className="card-panel z-depth-1 " style={{height:'70vh'}}>
        <span className="grey-text" style={{fontFamily:'Coiny'}}>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span>
        <p>{props.match.params.id}</p>
      </div>
    </div>
  </div>
  <div className="grey-text">created by shivam</div>
  <div className="grey-text">32423423 pm</div>
    </div>
  )
}
