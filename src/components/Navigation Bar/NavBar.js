import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import logo from './../../assets/Logo.png';
import { useKeycloak } from '@react-keycloak/web/lib/useKeycloak';
import icon from './../../assets/UserIcon.svg'
import './NavBar.css'

function NavBar({setFilter}){


  const { keycloak, initialized } = useKeycloak();
  const [dropdown,setDropdown]= useState(false);
  const [filter,setfilter]=useState('');

  const handleClick = (e) =>{
    setfilter(e);
    setFilter(filter)
  }

    return(
      <>
    <nav className='navbaritems'>
        <img className='NavLogo' src={logo} alt=""/>
        <input 
        id="searchBar" 
        type="text" 
        placeholder="SEARCH"
        value={filter}
        onChange={(e) => handleClick(e.target.value)}
        ></input>    
        <div className='MenuLink'>
          <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
        </div>

        
        
        <button onMouseEnter={() => setDropdown(true)}
          onMouseLeave={()=> setDropdown(false)}
          className='UserIcon-Bt'>
          <img className='UserIcon' src={icon} alt=""/>
          {dropdown && <Dropdown/>}  
        </button>
    </nav>
    </>
  )
}
export default NavBar
