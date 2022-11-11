import React, { useState } from 'react'
import './NavBar.css'
import profile from '../Pictures/ReactLogo.png'

function NavBar() {
  const [DarkMode, setdarkMode] = useState(false);
  let classToggle = DarkMode ? "Dark" : "";
  return (
    <>
      <div className={`NavBar${classToggle}`}>
        <div className="container-fluid">
          <div className="col-sm-2">
            <img src={profile} className="mt-4 ml-0" />
            <h1 className='title pl-5 pt-4 ml-5'>Axvin_Axu</h1>
          </div>
          <div className="col-9 container">
            <button className='resume'>Resume</button>
          </div>
          <div className="col-11 container-fluid">
            <label className='switch'>
              <input type="checkbox" value={DarkMode} onClick={(e) => {
                setdarkMode(e.target.checked);
              }} />
              <span className='slider' />
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar