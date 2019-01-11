import React from 'react'

import {NavLink} from 'react-router-dom';

export default function LoggedOutLinks() {
  return (
    <div className='right hide-on-med-and-down'>
        <ul > <li><NavLink to='/login' className='grey-text'>Login</NavLink></li></ul>
      
    </div>
  )
}
