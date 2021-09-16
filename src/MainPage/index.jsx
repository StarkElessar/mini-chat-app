import React, { useState } from "react";
import './style.css';
import { NavLink } from "react-router-dom";

const MainPage = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => setIsVisible(true);


  return (
    <div className='main-page__wrapper'>
      <div className="header">
        <div className="container">
          <button onClick={showModal}>Create a channel</button>
          <NavLink to='/'>
            <span>Stark</span>
          </NavLink>
        </div>
      </div>
      <div className="body">
        <WelcomeComponent />
      </div>
      <ModalNewChannel isVisible={isVisible}/>
    </div>
  )
};

const WelcomeComponent = (props) => {
  return (
    <h1>Welcome to test chat</h1>
  )
};

const ModalNewChannel = (props) => {
  return (
    <div className={props.isVisible ? 'newChannel show' : 'newChannel'}>
      <h2>New Channel</h2>
      <form action="">
        <input type="text" placeholder='Channel Title..' required/>
        <input type="text" placeholder='Channel Description' required />
        <NavLink to='/new-channel'>
          <input type="submit" value='Create' />
        </NavLink>
        
      </form>
    </div>
  )
};



export default MainPage;