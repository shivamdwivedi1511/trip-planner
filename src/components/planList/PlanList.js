import React from 'react'
import Plan from './Plan';

export default function PlanList(props) {
    let color=['purple', 'orange','black','teal','pink','red','yellow']
  return (
    <div>
      {props.plans.map(item=>{
        return <Plan color={color} key={item.id} name={item.name} details={item.details}/>
      })}
      
    </div>
  )
}
