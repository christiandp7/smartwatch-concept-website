import React from 'react'

function ThemeSwitch() {
  return (
    <div>
      <input type="checkbox" class="themeSwitch_checkbox" id="themeSwitch" />
      <label class="themeSwitch_label" for="themeSwitch">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <div class="themeSwitch_label_ball"></div>
      </label>
    </div>
  )
}

export default ThemeSwitch
