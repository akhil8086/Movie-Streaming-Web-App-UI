import React from 'react'
import "./Header.css"
import searchsvg from "../assets/search.svg"
import notificationSvg from "../assets/notification.svg"
import avatarSvg from "../assets/avatar.svg"
import heartSvg from "../assets/heart.svg"

function Header() {
  return (
    <div className='header'>
    <div className='main'>
     <div className='buttons'>
      <button className='btns'>Movies</button>
      <button className='btns'>Series</button>
      <button className='btns'>Documentaries</button>
     </div>

      <div className='main_one'>
        <img src={searchsvg} alt='search' />
        <img src={notificationSvg} alt='notification' />
        <img src={avatarSvg} alt='avatar' />
        <span>Tetiana</span>
        </div>
    </div>

    <div className='main_two'>
        <h1>Insider</h1>
        <p>2022 | Comedy horror | 1 Season</p>
        <div style={{display:"inline-flex", alignItems:"flex-start",gap:"10px"}}> 
        <button> Watch Now </button>
        <img src={heartSvg} alt='icon' />
        </div>

    </div>
    </div>
  )
}

export default Header