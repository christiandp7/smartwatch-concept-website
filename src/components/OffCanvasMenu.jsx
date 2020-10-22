import React from 'react'
import { LogoSVG, Times } from '../svg/Icons'

function OffCanvasMenu({ toggleMenu, ocMenu }) {

  const mount = document.getElementById("portal-root");
const el = document.createElement("div");
  
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
    </aside>


  )
}

export default OffCanvasMenu
