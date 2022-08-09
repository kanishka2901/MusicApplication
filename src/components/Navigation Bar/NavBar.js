import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import logo from './../../assets/Logo.png';
import { useKeycloak } from '@react-keycloak/web/lib/useKeycloak';
import iconLight from './../../assets/UserIcon.svg';
import iconDark from '../../assets/User_white_icon.svg';
import './NavBar.css';
import ToggleModeButton from './../ToggleModeButton';
import { ToggleModeContext } from '../ToggleModeContext';


function NavBar({setFilter}){

  const { keycloak, initialized } = useKeycloak();
  const [dropdown,setDropdown]= useState(false);
  const [filter,setfilter]=useState('');

  const handleClick = (e) =>{
    setfilter(e);
    setFilter(filter)
  }
  const { darkMode } = useContext(ToggleModeContext);
    return(
      <>
    <nav className={darkMode ? 'Dark' : 'navbaritems'}>
        <img className='NavLogo' src={logo} alt=""/>
        <input 
        id={darkMode ? 'dark' : "searchBar" }
        type="text" 
        placeholder="SEARCH"
        value={filter}
        onChange={(e) => handleClick(e.target.value)}
        ></input>    
        <div className='MenuLink'>
          <ul className={darkMode ? 'dark' : null}>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <ToggleModeButton/>
        </ul>
        
        </div>

        <button onMouseEnter={() => setDropdown(true)}
          onMouseLeave={()=> setDropdown(false)}
          className={darkMode ? 'UserIcon-Bt-dark' : 'UserIcon-Bt'}>
          {dropdown && <Dropdown/>}  
        </button>
    </nav>
    </>
  )
}
export default NavBar
