import React, { useState, useContext } from "react";
import './style.css';
import { NavLink } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import iconSettings from './img/settings.svg'

const MainPage = (props) => {

  const {userName} = useContext(GlobalContext);
  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => setIsVisible(true);
  const closeModal = (event) => setIsVisible(event.target.false);

  return (
    <div className='main-page__wrapper'>
      <div className="header">
        <div className="container">
          <button onClick={showModal}>Create a channel</button>
          <div className="mini-nav">
            <NavLink to='/login'>
              <span className='user-login'>{userName}</span>
            </NavLink>
            <div className="user__avatar">
              <img src="https://themified.com/friend-finder/images/users/user-4.jpg" alt="user__avatar" />
            </div>
            <NavLink className='icon-settings' to='/settings'>
              <img className='icon-settings' src={iconSettings} alt="icon-settings" />
              <span className='icon-label'>User Settings</span>
            </NavLink>
          </div>
          
        </div>
      </div>
      <div className="body">
        <WelcomeComponent />
      </div>
      <ModalNewChannel closeModal={closeModal} isVisible={isVisible}/>
    </div>
  )
};

const WelcomeComponent = (props) => {
  return (
    <h1>Welcome to test chat</h1>
  )
};

const ModalNewChannel = (props) => {

  const { channelTitle, channelDescription, updateChannelTitle, updateChannelDescription } = useContext(GlobalContext);
  const onChannelTitleChange = (event) => updateChannelTitle(event.target.value);
  const onChannelDescriptionChange = (event) => updateChannelDescription(event.target.value);

  return (
    <div onClick={props.closeModal} className={props.isVisible ? 'newChannel show' : 'newChannel'}>
      <h2>New Channel</h2>
      <form action="">
        <input onClick="event.stopPropagation()" value={channelTitle} onChange={onChannelTitleChange} type="text" placeholder='Channel Title..' required/>
        <input onClick="event.stopPropagation()" value={channelDescription} onChange={onChannelDescriptionChange} type="text" placeholder='Channel Description' required />
        <NavLink to='/new-channel'>
          <input disabled={!channelTitle || !channelDescription} type="submit" value='Create' />
        </NavLink>
      </form>
    </div>
  )
};



export default MainPage;