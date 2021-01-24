import React from "react";

function Messages({ messages }) {
  return (
    <div>
      <h3>Messages</h3>
      <div className="msg__list">
        {messages.map((msg, i) => (
          <div className="msg" key={i}>
            <span className="msg__timestamp">{msg.timestamp}</span>
            <span className="msg__text">{msg.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Messages.displayName = "Messages";

export default Messages;