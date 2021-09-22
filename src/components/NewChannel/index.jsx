import React, { useContext } from "react";
import './style.css';
import { NavLink } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import Message from "./Message";

const robotAvatar = 'https://thumbs.dreamstime.com/b/robot-icon-robot-icon-vector-flat-illustration-graphic-web-design-isolated-black-background-artificial-intelligen-188465910.jpg';

const NewChannel = () => {
  const {
    state: {
      user: {
        firstName,
        lastName,
        avatar,
      },
      channel: {
        title,
        description,
        inputTextMessage,
        messages
      },
    },
    actions: {
      clearGlobalState,
      updateInputMessage,
      sendMessage
    }
  } = useContext(GlobalContext);
  const onInputTextMessageChange = (event) => updateInputMessage(event.target.value);
  const onLogoutClick = () => {
    localStorage.setItem('isAuthenticated', false);
    clearGlobalState();
  };
  const onSendMessageClick = (event) => {
    event.preventDefault();

    sendMessage({
      userName: `${firstName} ${lastName}`,
      text: inputTextMessage,
      avatar
    });
    updateInputMessage('');

    setTimeout(() => {
      sendMessage({
        userName: 'echo',
        text: Math.random().toString(36).substring(2, 20),
        avatar: robotAvatar,
      });
    }, Math.floor(Math.random() * 2000) + 1000);
  };

  return (
    <div className='new-channel__wrapper'>
      <div className="new-channel__body">
        <div className="new-channel__header">
          <div className="title-block">
            <h2>{title}</h2>
            <span>{description}</span>
          </div>
          <NavLink to='/login'>
            <button onClick={onLogoutClick} className='logout__btn'>Logout</button>
          </NavLink>
        </div>
        <div className="chat__body">
          {messages.map(({ id, userName, text, avatar }) =>
            <Message
              key={id}
              userName={userName}
              text={text}
              avatar={avatar}
            />
          )}
        </div>
        <form className="chat__footer">
          <textarea
            onChange={onInputTextMessageChange}
            value={inputTextMessage}
            placeholder='Type Your Message..'
            name="user_text"
            id="user_text"
          />
          <button onClick={onSendMessageClick}>Send</button>
        </form>
      </div>
    </div>
  )
};

export default NewChannel;