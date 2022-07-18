import React from 'react'
import './landing.css';
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';

function landing() {
  return (
    <div className='page'>
        <img className='logo' src={logo} alt=""/>
        <Link className="link" to="/Sign-Up">
          <button className='sign-up'>SIGN UP</button>
        </Link>
        <Link className="link" to="/Sign-In">       
         <button className='sign-in'>SIGN IN</button>        
        </Link>
    </div>
  )
}

export default landing