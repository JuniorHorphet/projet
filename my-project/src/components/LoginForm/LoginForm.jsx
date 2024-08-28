import React from 'react'
import './LoginForm.css'
import Illustration from '../../assets/background.jpg'
import { FaUser, FaLock } from "react-icons/fa";
const LoginForm = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ Illustration: `url(${Illustration})` }}
    >
    
    <div className='flex items-center justify-center h-screen'>
       <div className='wrapper'>
          <form action = "">
             <h1>LoginForm</h1>
             <div className='input-box'>
               <input type='text' placeholder='Username' required/>
               <FaUser className='icon' />
             </div>
             <div className='input-box'>
               <input type='password' placeholder='password' required/>
               <FaLock className='icon' />
             </div>
             <div className="remember-forgot">
               <label><input type='checkbox'/> Remember me </label>
               <a href="#">Forgot Password ?</a>
               </div>
               <button type='submit'>Login</button>
               <div className="register-link">
                 <p> Don't have an account ? <a href='#'>Register</a></p>
               </div>
          </form>
       </div>
    </div>
    </div>
  )

}

export default LoginForm
