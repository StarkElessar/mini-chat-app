import React, { useContext, useState } from "react";
import './style.css';
import { NavLink } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";

const NewChannel = (props) => {
  const { channelTitle, channelDescription, clearGlobalState, firstName, lastName } = useContext(GlobalContext);
  const [isTextInput, setIsTextInput] = useState();
  const [isMessage, setIsMessage] = useState([
    { id: 1, userName: `${firstName} ${lastName}`, textMessage: 'Привет как дела!' },
    { id: 2, userName: `${firstName} ${lastName}`, textMessage: 'Что делаешЬ?' },
    { id: 3, userName: `${firstName} ${lastName}`, textMessage: 'Почему мне не звонишь?' },
  ]);

  const sendNewMessage = (event) => {
    event.preventDefault();
    const newMessage = {
      id: Date.now(),
      userName: `${firstName} ${lastName}`,
      textMessage: isTextInput
    };
    setIsMessage([...isMessage, newMessage]);
    setIsTextInput('');
}

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

          {
            isMessage.map(({userName, textMessage, id, index}) =>
              <UserMessage
                key={id}
                id={id}
                userName={userName}
                textMessage={textMessage}
              />
            )}

        </div>
        <form className="chat__footer">
          <textarea value={isTextInput} onChange={event => setIsTextInput(event.target.value)} name="user_text" id="user_text" placeholder='Type Your Message..' />
          <button onClick={sendNewMessage} >Send</button>
        </form>
      </div>
    </div>
  )
}

const UserMessage = (props) => {
  return (
    <div className="user__message">
      <div className="user__avatar">
        <img src="https://themified.com/friend-finder/images/users/user-4.jpg" alt="user-avatar" />
      </div>
      <div className="text__block">
        <span className="user__name">{props.userName}</span>
        <span className="message__id">{props.id}</span>
        <span className="user__messages">{props.textMessage}</span>
      </div>
    </div>
  )
}

export default NewChannel;