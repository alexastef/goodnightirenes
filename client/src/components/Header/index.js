import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/GNI_logo_final_vert_rev_new.png';
import Fade from 'react-reveal';
import './style.css';

const Header = () => {
  const [click, setClicked] = useState(false);
  const handleClick = () => setClicked(!click);
  const closeMobileMenu = () => setClicked(false);

  console.log(click)
  return (
    <header>
       <Link 
        to="/"
        className="nav-logo"
        >
          <img src={Logo} alt="Goodnight Irene's Logo" className="nav-brand" onClick={closeMobileMenu}/>
        </Link>
        
      <Fade>
      <nav className={ click ? "nav-active" : ""}>
        <Link 
        to="menu"
        className="nav-link"
        onClick={closeMobileMenu}
        >
          MENU
        </Link>
        <Link
        to="beer"
        className="nav-link"
        onClick={closeMobileMenu}
        >
          BEER
        </Link>
        <Link 
        to="about"
        className="nav-link"
        onClick={closeMobileMenu}
        >
          ABOUT
        </Link>
        <Link 
        to="contact"
        className="nav-link"
        onClick={closeMobileMenu}
        >
          CONTACT
        </Link>
      </nav>
      </Fade>
      <div className="mobile-nav" onClick={handleClick}>
        {click ? ( <i className="fas fa-times fa-4x nav-icon"></i> ) : ( <i className="fas fa-bars fa-4x nav-icon"></i> )}
      </div>
    </header>

  )
}

export default Header;
