import React from "react";

function ThemeSwitcherButton({ onChangeTheme }) {

  return (

    <div id="sun-moon-container">

      <label id="theme-switch-label" htmlFor="toggle">theme switcher:</label>
        <input
          className="sun-moon-checkbox"
          type="checkbox"
          onClick={() => onChangeTheme("clicked")}
          id="toggle"
        />
      

      <div className="sun-moon-div"></div>
    </div>

  )
}


export default ThemeSwitcherButton;
