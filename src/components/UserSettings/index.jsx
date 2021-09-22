import React, {useContext} from "react";
import './style.css';
import GlobalContext from "../../context/GlobalContext";
import { NavLink } from "react-router-dom";

const UserSettings = () => {
  const {
    state: {
      user: {
        firstName,
        lastName
      }
    },
    actions: {
      updateFirstName,
      updateLastName
    }
  } = useContext(GlobalContext);
  const onChangeFirstName = (event) => updateFirstName(event.target.value);
  const onChangeLastName = (event) => updateLastName(event.target.value);
  
  return (
    <div className="settings__container">
      <div className="settings__wrapper">
        <h2>User Settings</h2>
        <div className="col-1">
          <div className="avatar">
            <img src="https://themified.com/friend-finder/images/users/user-4.jpg" alt="user-avatar" />
          </div>
        </div>
        <div className="col-2">
          <div className='label__input'>
            <label htmlFor="pass">First Name:</label>
            <input onChange={onChangeFirstName} className='input__setting' type="text" placeholder='Enter your First Name..' value={firstName} />
          </div>
          <div className='label__input'>
            <label htmlFor="pass">Last Name:</label>
            <input onChange={onChangeLastName} className='input__setting' type="text" placeholder='Enter your Last Name..' value={lastName} />
          </div>
          <NavLink to='/main-page'>
            <button disabled={!firstName || !lastName} className='apply-btn'>Apply</button>
          </NavLink>
        </div>
      </div>
    </div>
    
  )
};

export default UserSettings;