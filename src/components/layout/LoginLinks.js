import React from 'react'

import {NavLink} from 'react-router-dom';

export default function LoginLinks() {
  return (
    <div className='right hide-on-med-and-down'>
      <ul><li><NavLink to='/newtrip' className='grey-text'>New Trip</NavLink></li>
         
         <li><NavLink to='/' className='grey-text'>Logout</NavLink></li>
         <li><NavLink to='#' className='btn btn-floating red'>SD</NavLink></li>
        </ul>
         
    </div>
  )
}
