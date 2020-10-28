import React, { useState, useEffect } from 'react'

import Sun from '../assets/images/sunny.png'
import Moon from '../assets/images/half-moon.png'

function ThemeSwitch() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if(darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode])

  return (
    <div>
      <input 
        type="checkbox" 
        checked={darkMode} 
        onChange={() => setDarkMode(!darkMode)} 
        className="themeSwitch_checkbox" 
        id="themeSwitch" 
      />
      <label className="themeSwitch_label" htmlFor="themeSwitch">
        <img src={Moon} className="themeSwitch_icon" alt="Moon"/>
        <img src={Sun} className="themeSwitch_icon" alt="Sun"/>
        <div className="themeSwitch_label_ball"></div>
      </label>
    </div>
  )
}

export default ThemeSwitch
