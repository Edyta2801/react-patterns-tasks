import React from "react";
import "./style.css";

function FancyBorder(props) {
  return <div className={"FancyBorder-" + props.color}>{props.children}</div>;
}

export default FancyBorder;