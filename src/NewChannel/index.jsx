import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";

const NewChannel = (props) => {
  return (
    <div className='new-channel__wrapper'>
      <div className="new-channel__body">
        <div className="new-channel__header">
          <div className="title-block">
            <h2>Your Title Channel</h2>
            <span>Your description with random text, Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, labore.</span>
          </div>
          <NavLink to='/'>
            <button className='logout__btn'>Logout</button>
          </NavLink>
        </div>
        <div className="chat__body">
          <div className="user__message">
            <div className="user__avatar">
              <img src="https://themified.com/friend-finder/images/users/user-2.jpg" alt="user-avatar" />
            </div>
            <div className="text__block">
              <span className="user__name">Sarah Cruiz</span>
              <span className="user__messages">Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
          <div className="user__message">
            <div className="user__avatar">
              <img src="https://themified.com/friend-finder/images/users/user-4.jpg" alt="user-avatar" />
            </div>
            <div className="text__block">
              <span className="user__name">Cris Haris</span>
              <span className="user__messages">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quaerat reiciendis aut sint ut doloribus.</span>
            </div>
          </div>
          <div className="user__message">
            <div className="user__avatar">
              <img src="https://themified.com/friend-finder/images/users/user-2.jpg" alt="user-avatar" />
            </div>
            <div className="text__block">
              <span className="user__name">Sarah Cruiz</span>
              <span className="user__messages">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat.</span>
            </div>
          </div>
          <div className="user__message">
            <div className="user__avatar">
              <img src="https://themified.com/friend-finder/images/users/user-4.jpg" alt="user-avatar" />
            </div>
            <div className="text__block">
              <span className="user__name">Cris Haris</span>
              <span className="user__messages">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quaerat reiciendis aut sint ut doloribus.</span>
            </div>
          </div>
          <div className="user__message">
            <div className="user__avatar">
              <img src="https://themified.com/friend-finder/images/users/user-2.jpg" alt="user-avatar" />
            </div>
            <div className="text__block">
              <span className="user__name">Sarah Cruiz</span>
              <span className="user__messages">Lorem ipsum.</span>
            </div>
          </div>
          <div className="user__message">
            <div className="user__avatar">
              <img src="https://themified.com/friend-finder/images/users/user-4.jpg" alt="user-avatar" />
            </div>
            <div className="text__block">
              <span className="user__name">Cris Haris</span>
              <span className="user__messages">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quaerat reiciendis aut sint ut doloribus.</span>
            </div>
          </div>
        </div>
        <form className="chat__footer">
          <textarea name="user_text" id="user_text" placeholder='Type Your Message..' />
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default NewChannel;