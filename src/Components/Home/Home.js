import React from 'react'
import './Home.css'

import { FiDownload } from 'react-icons/fi';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiRupee } from 'react-icons/bi';
import { BiSupport } from 'react-icons/bi';
import { MdSend } from 'react-icons/md';


function Home() {
  return (
    <div className='home'>
      <h2 className='welcome-txt'>Welcome Arun Prakash</h2>
      <hr className='name-line'></hr>
      <h1 className='dashboard-txt'>Dashboard</h1>

      <div className='stats-section'>
        <div className='stat-1'>
          <h2 className='stat-txt'>Total Downloads</h2>
          <FiDownload className='stat-icon-1'  />
          <h2 className='stat-num'>6000</h2>
        </div>
        <div className='stat-2'>
          <h2 className='stat-txt'>Active Accounts</h2>
          <MdOutlineAccountCircle className='stat-icon-2'  />
          <h2 className='stat-num'>200</h2>
        </div>
        <div className='stat-3'>
          <h2 className='stat-txt'>Total Revenue</h2>
          <BiRupee className='stat-icon-3'  />
          <h2 className='stat-num'>₹ 292</h2>
        </div>
        <div className='stat-4'>
          <h2 className='stat-txt'>Issues Closed</h2>
          <BiSupport className='stat-icon-4'  />
          <h2 className='stat-num'>184</h2>
        </div>
      </div>

      <div className='announcements-section'>
        <h2 className='app-txt'>App Announcements</h2>
        <input className='app-input' placeholder='Enter your message here' />
        <button className='snd-btn' type='submit'><MdSend className='snd-icon' /></button>
      </div>
    </div>
  )
}

export default Home