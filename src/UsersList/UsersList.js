import React from "react";
import User from "../User";

function UsersList({ users }) {
  return (
    <div>
      {users &&
        users.map(user => (
          <div>
            <User data={{ first: user.name.first, last: user.name.last }} />
          </div>
        ))}
    </div>
  );
}
export default UsersList;

// Ten komponent może być bardziej dokładnie ostylowany,
// Tutaj mogą być warunki jakie dane pokazać, kiedy je pokazać, jak je sformatować 