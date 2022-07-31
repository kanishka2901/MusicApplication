import React from 'react'
import './landing.css';
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web/lib/useKeycloak';
import RenderOnAnonymous from '../../components/RenderOnAnonymous'
import UserService from '../../services/UserService';

function Landing() {
  const { keycloak, initialized } = useKeycloak();
  return (
     <>
    // <RenderOnAnonymous>
    <div className='page'>
        <img className='logo' src={logo} alt=""/>
        {/* <Link className="link" to="/Sign-Up">
          <button className='sign-up'>SIGN UP</button>
        </Link> */}
        {/* <Link className="link" to="/Sign-In">       
         <button className='sign-in'>SIGN IN</button>        
        </Link> */}
         {/* {!keycloak.authenticated && ( */}
                   <button
                     type="button"
                     className="sign-in"
                     onClick={UserService.doLogin}
                   >
                    SIGN IN
                   </button>
                 {/* )} */}
        
    </div>
    // </RenderOnAnonymous>
    </>
  )
}

export default Landing