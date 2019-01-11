import React, { Component } from 'react'
import {connect} from 'react-redux';

 class NewTrip extends Component {
    state={
      
    };
    
    onChange=(e)=>{
      let name=e.target.name;
      let value =e.target.value;
      this.setState({
        [name]:value
      },()=>console.log(this.state));
      
    }
    onSubmit=(e)=>{
      e.preventDefault()
        
        console.log('[state]'+ this.state.name+' '+ this.state.details)
    }

  render() {
    return (
      <div className="row">
    <div className="col s12 m12 l12 " >
    
      <div className="card-panel z-depth-1 black grey-text" style={{height:'80vh'}}>
      <h2>New Trip</h2>
      <div className='container'>
        <form>
        <div>
        <input type="text" placeholder="Enter next trip name" name='name' onChange={this.onChange} style={{color:'grey'}}/>
        </div>
            
        <div>
        <textarea type="text" placeholder="Enter details" className='materialize-textarea' name='details' onChange={this.onChange} style={{color:'grey'}}/>
        </div>
        <div>
            <button className='btn pink' onClick={this.onSubmit}>submit</button>
        </div>
        </form>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
const mapStateToProps =(state)=>{
    return {
        plans:state.plans.plans,
    }
}

export default connect()(NewTrip);
