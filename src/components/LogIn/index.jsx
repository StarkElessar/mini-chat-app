import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from '../../context/GlobalContext';
import './style.css';

const LogIn = () => {
  const {
    state: {
      user: {
        email,
        password
      }
    },
    actions: {
      authenticate,
      updateEmail,
      updatePassword
    }
  } = useContext(GlobalContext);
  const onEmailChange = (event) => updateEmail(event.target.value);
  const onPasswordChange = (event) => updatePassword(event.target.value);
  const authenticateUser = () => {
    localStorage.setItem('isAuthenticated', true);
    authenticate();
  };

  return (
    <div className='login__container'>
      <div className='login__wrapper'>
        <form>
          <div className='label__input'>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={onEmailChange} type="text" id='email' name='user_email' placeholder='Enter Your Email' required />
          </div>
          <div className='label__input'>
            <label htmlFor="pass">Password</label>
            <input value={password} onChange={onPasswordChange} type="password" id='pass' name='user_pass' placeholder='Enter Your Password' required />
          </div>
          <div className='label__input'>
            <NavLink to='/main-page'>
              <button disabled={!email || !password} onClick={authenticateUser}>
                Login
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default LogIn;
