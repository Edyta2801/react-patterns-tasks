import React from "react";

function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Send
    </button>
  );
}
Button.displayName = "Button";

export default Button;