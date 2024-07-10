import React from 'react'
import '../css/Sidebar.scss'
import { TbArrowBarLeft } from "react-icons/tb";
import { TbSettings2 } from "react-icons/tb";
import { TbTags } from "react-icons/tb";
import { TbHeartBroken } from "react-icons/tb";
import { TbLayoutDashboard } from "react-icons/tb";
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className="top">
        <div className="profile">
          <div className="pfp">
            <p>A</p>
          </div>
          <p>Name</p>
        </div>
        <ul>
          <NavLink className='listitem' to='/'>
            <TbLayoutDashboard />
            <p>Dashboard</p>
          </NavLink>
          <NavLink className='listitem' to='/settings'>
            <TbSettings2 />
            <p>Settings</p>
          </NavLink>
          <NavLink className='listitem' to='/hashtags'>
            <TbTags />
            <p>Hashtags</p>
          </NavLink>
          <NavLink className='listitem' to='/canceled'>
            <TbHeartBroken />
            <p>Canceled Tasks</p>
          </NavLink>
        </ul>
      </div>
      <div className="bottom">
        <TbArrowBarLeft className='svg' />
        <p>sign out</p>
      </div>
    </div>
  )
}

export default Sidebar