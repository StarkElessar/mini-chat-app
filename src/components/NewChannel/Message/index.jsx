import React from "react";

const Message = ({ userName, text }) => {
  return (
    <div className="user__message">
      <div className="user__avatar">
        <img src="https://themified.com/friend-finder/images/users/user-4.jpg" alt="user-avatar" />
      </div>
      <div className="text__block">
        <span className="user__name">{userName}</span>
        <span className="user__messages">{text}</span>
      </div>
    </div>
  )
};

export default Message;