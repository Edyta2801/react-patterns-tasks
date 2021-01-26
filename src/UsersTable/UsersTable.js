import React from "react";

function UsersTable({ users }) {
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Surname</th>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.login.uuid}>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
