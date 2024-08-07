import React, { useEffect, useState } from 'react'
import '../css/Sidebar.scss'
import { TbArrowBarLeft } from "react-icons/tb";
import { TbTags, TbHeartBroken, TbLayoutDashboard, TbClock } from "react-icons/tb";
import { NavLink, UNSAFE_DataRouterContext } from 'react-router-dom'

function Sidebar() {
  const [userData, setUserData] = useState({ name: '', email: '' })
  const _id = localStorage.getItem('_id')

  const getUserData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_PATH}users/getMe`, {
      method: 'POST',
      body: JSON.stringify({
        id: _id
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();


    setUserData(data)
  }

  useEffect(() => {
    getUserData()
  }, [])

  const signout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('_id')
    window.location.href = '/'
  }
  return (
    <div className='Sidebar'>
      <div className="top">
        <div className="profile">
          <div className="pfp">
            <p>A</p>
          </div>
          <p>{userData.name}</p>
        </div>
        <ul>
          <NavLink className='listitem' to='/'>
            <TbLayoutDashboard />
            <p>Dashboard</p>
          </NavLink>
          <NavLink className='listitem' to='/hashtags'>
            <TbTags />
            <p>Hashtags</p>
          </NavLink>
          <NavLink className='listitem' to='/pending'>
            <TbClock />
            <p>Pending</p>
          </NavLink>
          <NavLink className='listitem' to='/canceled'>
            <TbHeartBroken />
            <p>Canceled</p>
          </NavLink>
        </ul>
      </div>
      <div onClick={signout} className="bottom">
        <TbArrowBarLeft className='svg' />
        <p>sign out</p>
      </div>
    </div>
  )
}

export default Sidebar