import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from '../../context/GlobalContext';
import './style.css';

const LogIn = (props) => {
  const { email, password, setIsAuthenticated, updateEmail, updatePassword } = useContext(GlobalContext);
  const onEmailChange = (event) => updateEmail(event.target.value);
  const onPasswordChange = (event) => updatePassword(event.target.value);
  const authenticate = () => {
    setIsAuthenticated(true);
    localStorage.setItem('authenticate', true)
  };

  useEffect(() => {
    if (localStorage.getItem('authenticate')) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <div className='login__wrapper'>
      <form action="#" method='GET'>
        <div className='labelInput'>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={onEmailChange} type="text" id='email' name='user_email' placeholder='Enter Your Email' required />
        </div>
        <div className='labelInput'>
          <label htmlFor="pass">Password</label>
          <input value={password} onChange={onPasswordChange} type="password" id='pass' name='user_pass' placeholder='Enter Your Password' required />
        </div>
        <div className='labelInput'>
          <NavLink to='/main-page'>
            <button disabled={!email || password !== '123'} onClick={authenticate}>
              Login
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  )
};

export default LogIn;
