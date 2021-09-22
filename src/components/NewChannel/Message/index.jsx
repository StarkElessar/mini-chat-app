import React from "react";

const Message = ({ userName, text, userAvatar }) => {
  return (
    <div className="user__message">
      <div className="user__avatar">
        <img src={userAvatar} alt="user-avatar" />
      </div>
      <div className="text__block">
        <span className="user__name">{userName}</span>
        <span className="user__messages">{text}</span>
      </div>
    </div>
  )
};

export default Message;