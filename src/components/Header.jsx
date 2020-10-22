import React from 'react'
import { MenuIcon, LogoSVG } from '../svg/Icons'

function Header({ toggleMenu }) {
  
  return (
    <header>
      <div className="wrapper header__wrapper">
        <button onClick={toggleMenu} className="menu-btn">
          <MenuIcon />
        </button>
        <a href="" className="brand_logo">
          <LogoSVG />
        </a>
        <nav className="header__nav">
          <ul>
            <li><a href="" className="nav-link">Home</a></li>
            <li><a href="" className="nav-link">Smartphone</a></li>
            <li><a href="" className="nav-link">Store</a></li>
            <li><a href="" className="nav-link cta">Buy Now</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header