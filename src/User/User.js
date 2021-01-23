import React from "react";

function User({ data }) {
  return (
    <div>
      {data.first} {data.last}
    </div>
  );
}

export default User;

// Komponent pojedyńczego użytkownika bedzie sie zajmował tym jak to osadzić.