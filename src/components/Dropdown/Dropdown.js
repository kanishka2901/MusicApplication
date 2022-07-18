import React, { useState } from 'react'
import './Dropdown.css';
import {MenuItems} from '../../components/MenuItems';
import { Link } from 'react-router-dom';
function Dropdown() {
  const [Dropdown,setDropdown]= useState(false);

  return (
    <>
    <ul 
    className={Dropdown ? 'dropdown-menu-clicked' : 'dropdown-menu'}
    onClick={() =>setDropdown(!Dropdown)}>
      {MenuItems.map((item) => {
        return(
          <Link className="Dropdown-Link-tag" to={item.path} key={item.id}>
          <li >
            <div className={item.cName}
            onClick={()=>setDropdown(false)}>
              {item.title}
            </div>
          </li>
          </Link> 
        )
      })}

    </ul>
    </>
  )
}

export default Dropdown;