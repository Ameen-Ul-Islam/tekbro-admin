import React from 'react'
import './Sidebar.css'
import Logo from '../Imgs/Logo.png'
import LogOut from '../Imgs/logout.svg'
import { SidebarData } from './SidebarData'

function Sidebar() {
  return (
    <div className='sidebar'>
      <img className='sidebar-logo' src={Logo} />
      <ul className='link-container'>
      {SidebarData.map((val,key)=>{
        return(
          <li className='sidebar-link'
            key={key}
            id={window.location.pathname === val.link ? 'active':''}
            onClick={()=>{window.location.pathname = val.link}
            }> 
            <div className='sidebar-icon'>{val.icon}</div>
            <div className='sidebar-txt'>{val.name}</div>
          </li>
        )
      })}
      </ul>

      <div className='sidebar-user'>
        <h1 className='user-name'>Arun Prakash</h1>
        <p className='user-role'>Admin</p>
        <hr className='hr'></hr>
        <div className='logout-container'>
        <img className='logout-img' src={LogOut}/><h2 className='logout-txt'>Logout</h2>
        </div>
      </div>

    </div>
  )
}

export default Sidebar