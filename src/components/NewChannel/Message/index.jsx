import React from "react";

const Message = ({ userName, text, avatar, style }) => {
  const messageStyle = userName === 'echo' ? 'echo__message' : 'user__message'
  
  return (
    <div className={messageStyle} style={style}>
      <div className="user__avatar">
        <img src={avatar} alt="user-avatar" />
      </div>
      <div className="text__block">
        <span className="user__name">{userName}</span>
        <span className="user__messages">{text}</span>
      </div>
    </div>
  )
};

export default Message;