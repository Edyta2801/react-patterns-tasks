import React from "react";
import FancyBorder from "./FancyBorder";
import "./App.css";


function SpitPane(props) {
  return (
    <div>
      <div>{props.up}</div>
      <div>{props.bottom}</div>
    </div>
  );
}

function Grid(props) {
  return (
    <div>
      <div>{props.left}</div>
      <div>{props.right}</div>
      <div>{props.children}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <FancyBorder color="blue">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <SpitPane
          up={<FancyBorder color="red">Hello</FancyBorder>}
          bottom={<h1>Hello</h1>}
        />
        <Grid
       left={<p style={{marginRight:"200px", color:"red"}}>Anna</p>}
       right={<p style={{marginLeft:"200px", color:"blue"}}>Patryk</p>}/>
      </FancyBorder>
    </div>
  );
}
