import React, { Component } from 'react'

export default class Login extends Component {
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
      console.log('[state]'+ this.state.email+' '+ this.state.password)
    }

  render() {
    return (
      <div className="row">
    <div className="col s12 m12 l12 " >
    
      <div className="card-panel z-depth-1 black grey-text " style={{height:'80vh'}}>
      <h2>Login</h2>
      <div className='container'>
        <form>
        <div>
        <input type="text" placeholder="Enter your name" name='name' onChange={this.onChange} style={{color:'grey'}}/>
        </div>
            <div>
        <input type="email" placeholder="Enter email" name='email' onChange={this.onChange} style={{color:'grey'}}/>
        </div>
        <div>
        <input type="password" placeholder="Enter password" name='password' onChange={this.onChange} style={{color:'grey'}}/>
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
