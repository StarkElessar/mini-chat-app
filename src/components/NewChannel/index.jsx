import React, {useContext} from "react";
import './style.css';
import { NavLink } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";

const NewChannel = (props) => {
  const { channelTitle, channelDescription, clearGlobalState, firstName, lastName } = useContext(GlobalContext);

  return (
    <div className='new-channel__wrapper'>
      <div className="new-channel__body">
        <div className="new-channel__header">
          <div className="title-block">
            <h2>{channelTitle}</h2>
            <span>{channelDescription}</span>
          </div>
          <NavLink to='/login'>
            <button onClick={clearGlobalState} className='logout__btn'>Logout</button>
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
              <span className="user__name">{ firstName + ' ' + lastName }</span>
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
              <span className="user__name">{firstName + ' ' + lastName}</span>
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
              <span className="user__name">{firstName + ' ' + lastName}</span>
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