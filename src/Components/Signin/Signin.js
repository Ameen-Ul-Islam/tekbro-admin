import {React, useState} from 'react'
import './signin.css'
import Logo from '../Imgs/Logo.png'

function Signin() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  console.log(email);
  
  return (
    <div className='signin'>
      <div className='signin-container-a'>
      <img className='signin-logo' src={Logo} />
      <h2 className='signin-heading'>TekBro</h2>
      <p className='signin-subtxt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className='signin-container'>
        <h2 className='signin-txt'>SignIn</h2>
      <input className='signin-input' type='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)}></input>
      <input className='signin-input' type='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)}></input>
      <button className='signin-btn' type='submit'>SignIn</button>
      </div>

    </div>
  )
}

export default Signin