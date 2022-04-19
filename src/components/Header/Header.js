import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className='header-wrapper'>
        <div className='logo'>
          <NavLink to="/" className="brand" >Moon's Website</NavLink>
        </div>
        <div className='nav-wrapper'>
          <div className='navigation'>
            <NavLink to="/home" activeClassName='activeClass'>Home</NavLink>
            <NavLink to="/about" activeClassName='activeClass'>About</NavLink>
            <NavLink to="/users" activeClassName='activeClass'>Users</NavLink>
            <NavLink to="/contact" activeClassName='activeClass'>Contact</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;