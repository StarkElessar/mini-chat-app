import React, { useEffect, useRef, useState } from "react";
import './style.css';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainPage = (props) => {
  const [isVisible, setVisibiliti] = useState(false);
  const showModal = () => setVisibiliti();
  const buttonShowModalRef = useRef();

  useEffect(() => {
    buttonShowModalRef.addEventListener('click', showModal);
  }, []);

  return (
    <div className='mainPage__wrapper'>
      <div className="header">
        <div className="container">
          <button ref={buttonShowModalRef}>Create a channel</button>
          <NavLink to='/'>
            <span>Stark</span>
          </NavLink>
        </div>
      </div>
      <div className="body">
        <WelcomeComponent />
      </div>
      <ModalNewChannel  />
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
    <NewChannelWrap isVisible={props.isVisible}>
      <h2>New Channel</h2>
      <form action="">
        <input type="text" placeholder='Channel Title..' required/>
        <input type="text" placeholder='Channel Description' required/>
        <input type="submit" value='Create' />
      </form>
    </NewChannelWrap>
  )
};

const NewChannelWrap = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.89);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 450ms ease;
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
`;

export default MainPage;