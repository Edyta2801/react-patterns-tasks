import React from "react";

import "./style.css";

function UsersCards({ users }) {
  return (
    <div className="users">
      {users.map(user => (
        <div className="users__user" key={user.login.uuid}>
          <div className="users__user-name">{user.name.first}</div>
          <div className="users__user-surname">{user.name.last}</div>
        </div>
      ))}
    </div>
  );
}

export default UsersCards;
