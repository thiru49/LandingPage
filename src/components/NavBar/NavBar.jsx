import React, { useState } from 'react';
import { navLinks } from '../../constants/index';
import { logo } from '../../assets';
import { NavLink } from 'react-router-dom';

import './navbar.css'

const NavBar = () => {

  const [active, setActive] = useState('main');
 

  return (
  
  <nav className='navbar'>
      <div>
        <img src={logo} alt="logo"  />
      </div>
     
      <ul className='nav-links'>
        {navLinks.map(item => (
          <li key={item.id}
            className={`nav-link-item ${active === item.id ? 'active' : ""}`}
            onClick={() => setActive(item.id)}>
            <NavLink to={item.id}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
     
      
    </nav> 
  );
}

export default NavBar;
