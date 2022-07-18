import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import logo from './../../assets/Logo.png';
import icon from './../../assets/UserIcon.svg'
import './NavBar.css'

import {SongList} from './../SongList';

function NavBar(){

  const [dropdown,setDropdown]= useState(false);
  const [filter,setFilter]=useState('');
  
  // const searchText=(event)=>{
  //   setFilter(event.target.value);
  // }
  const newList = SongList.filter((song) => {
    return (Object.keys(song).some((key) =>
      song[key].toString().toLowerCase().includes(filter.toString().toLowerCase())))
  });
  // console.log(newList)
    return(
      <>
    <nav className='navbaritems'>
        <img className='NavLogo' src={logo} alt=""/>
        <input 
        id="searchBar" 
        type="text" 
        placeholder="SEARCH"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
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
