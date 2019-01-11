import React, { Component } from 'react'

import Notification from './Notification'
import PlanList from '../planList/PlanList';
import {connect} from 'react-redux';

 class Dashboard extends Component {
    
  render() {

    console.log(this.props.plans);

    return (
      <div>
         <div className="row">
       <div className="col s12 m7">
        <PlanList plans={this.props.plans}></PlanList>
    </div>
    <div className='col s12 m3 offset-m1 '>
    <Notification></Notification></div>
  </div>
           
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
        plans:state.planReducer.plans,
    }
}
export default connect(mapStateToProps)(Dashboard);
