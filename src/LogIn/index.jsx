import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

const LogIn = (props) => {
  return (
    <div className='login__wrapper'>
      <form action="#" method='GET'>
        <div className='labelInput'>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' name='user_email' placeholder='Enter Your Email' required/>
        </div>
        <div className='labelInput'>
          <label htmlFor="pass">Password</label>
          <input type="password" id='pass' name='user_pass' placeholder='Enter Your Password' required/>
        </div>
        <div className='labelInput'>
          <NavLink to='/main-page'>
            <input  type="submit" value='Login' />
          </NavLink>
          
        </div>
      </form>
    </div>
  )
};

export default LogIn;