import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import iconMoon from '../assets/images/icon-moon.svg'
import iconSun from '../assets/images/icon-sun.svg'


export const Nav = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleToggleTheme = () => {
      setDarkMode((prev) => !prev);
      document.body.classList.toggle('dark-theme');
    };

  return (
    <div className='nav'>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <button className='toggle-theme' onClick={handleToggleTheme}>
        <img src={darkMode ? iconSun : iconMoon} alt="theme icon" />
      </button>
    </div>
  )
}
