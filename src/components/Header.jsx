import React from 'react'
import Logo from "../assets/logo.png"
import "./Header.css"

export const Header = () => {
  return (
    <header >
        <div className="logo">
            <img className="logoImg" src={Logo} alt="Task Buddy Logo" />
            <span>Task Buddy</span>
        </div>
        <div className="themeSelector">
            <span className='light'></span>
            <span className='medium'></span>
            <span className='dark'></span>
            <span className='gradientOne'></span>
            <span className='gradientTwo'></span>
            <span className='gradientThree'></span>
        </div>
    </header>
  )
}
