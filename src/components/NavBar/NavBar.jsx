import React, { useState } from 'react';
import { navLinks } from '../../constants/index';
import { logo } from '../../assets';
import { NavLink } from 'react-router-dom';
import menu from '../../assets/OIP.jpeg';
import close from '../../assets/close.svg';
import './navbar.css'

const NavBar = () => {

  const [active, setActive] = useState('main');
  const [show,setShow] = useState(false)

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
      <div className='menu-icon' onClick={()=>setShow(!show)}>
        <img src={show ? close : menu} alt="" />
      </div>
      { show &&
      <ul className='nav-links-mobile'>
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
}
      
    </nav> 
  );
}

export default NavBar;
