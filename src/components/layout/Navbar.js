import React from 'react'
import {NavLink} from 'react-router-dom';
import LoggedOutLinks from './LoggedOutLinks';
import LoginLinks from './LoginLinks';

 const Navbar=()=> {
  return (
    <div>
     <nav  style={{opacity:'0.7'}}>
    <div className="nav-wrapper  black lighten-4" > 
      <NavLink to="#" className="brand-logo pink-text " id='logo'>Trip- Planner</NavLink>
      <ul id="nav-mobile" className="right   ">
      <LoginLinks/> 
      <LoggedOutLinks/>
      
      </ul>
    </div>
  </nav> 
    </div>
  )
}


export default Navbar;