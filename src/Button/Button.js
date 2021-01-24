import React from "react";

function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Send
    </button>
  );
}

export default Button;