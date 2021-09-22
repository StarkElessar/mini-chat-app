import React, { useState, useContext } from "react";
import './style.css';
import { NavLink } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import iconSettings from './img/settings.svg'
import NewChannelModal from "./NewChannelModal";

const MainPage = () => {
  const {
    state: {
      user: {
        firstName,
        avatar,
      }
    }
  } = useContext(GlobalContext);
  const [isVisible, setIsVisible] = useState(false);
  const toggleShowModal = () => setIsVisible(!isVisible);

  return (
    <div className='main-page__wrapper'>
      <div className="header">
        <div className="container">
          <button onClick={toggleShowModal}>Create a channel</button>
          <div className="mini-nav">
            <span className='user-login'>{firstName}</span>
            <div className="user__avatar">
              <img src={avatar} alt="user__avatar" />
            </div>
            <NavLink className='icon-settings' to='/user-settings'>
              <img className='icon-settings' src={iconSettings} alt="icon-settings" />
              <span className='icon-label'>User Settings</span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="body">
        <h1>Welcome to test chat</h1>
      </div>
      <NewChannelModal showModal={toggleShowModal} isVisible={isVisible}/>
    </div>
  )
};

export default MainPage;