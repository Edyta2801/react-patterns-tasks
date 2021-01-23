import React from "react";
import withData from '../withData';

function Hello(props) {
  console.log(props);
  return (
    <h1>
      Hi {props.defaultName ? props.defaultName : props.name}!! Greetings from{" "}
      {props.city}!
      {props.apiData && props.apiData.map(user => <div>{user}</div>)}
    </h1>
  );
}

Hello.defaultProps = {
  name: "",
  city: "Lublin"
};

export default withData(Hello);