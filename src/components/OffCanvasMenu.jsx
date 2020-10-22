import React from 'react'
import { createPortal } from "react-dom";
import { LogoSVG, Times } from '../svg/Icons'

function OffCanvasMenu({ toggleMenu, ocMenu }) {

  const portalContainer = document.getElementById("portals");
  const overlay = (
    <div onClick={toggleMenu} class="sidebar-overlay"></div>
  )
  
  return (
    <aside className={ocMenu && 'open'}>
      <button onClick={toggleMenu} className="close"><Times /></button>
      
      <ul className="sidebar__nav">
        <li><a href="">Home</a></li>
        <li><a href="">Smartphone</a></li>
        <li><a href="">Store</a></li>
      </ul>
      <a href="" className="brand_logo">
        <LogoSVG />
      </a>
      {
        ocMenu && createPortal(overlay, portalContainer)
      }
    </aside>
  )
}

export default OffCanvasMenu
