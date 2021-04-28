import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/GNI_logo_final_vert.png';

const Header = () => {
  return (
    <header>
      <nav>
        <Link 
        to="menu"
        className="nav-link"
        activeClass="active"
        >
          MENU
        </Link>
        <Link
        to="beer"
        className="nav-link"
        activeClass="active"
        >
          BEER
        </Link>
        <Link 
        to="/"
        className="nav-link nav-logo"
        activeClass="active"
        >
          <img src={Logo} className="nav-brand" />
        </Link>
        <Link 
        to="about"
        className="nav-link"
        activeClass="active"
        >
          ABOUT
        </Link>
        <Link 
        to="contact"
        className="nav-link"
        activeClass="active"
        >
          CONTACT
        </Link>
      </nav>
    </header>
  )
}

export default Header;