import React from "react";
import FancyBorder from "./FancyBorder";
import "./App.css";
import Hello from './Hello';


// Context API

const theme = {
  buttonColor: "red",
  isAuthenticated: true
};

const MyContext = React.createContext();

// class ThemedButton extends React.Component {
//   // static contextType = MyContext; // this.context
//   render() {
//     return (
//       <button style={{ color: this.context.buttonColor }}>Click me</button>
//     );
//   }
// }
// // ThemedButton.contextType = MyContext; // jeśli nie mona korzystać ze static

const ThemedButton = props => {
  return (
    <MyContext.Consumer>
      {value =>
        value.isAuthenticated && (
          <button style={{ color: value.buttonColor }}>Click me</button>
        )
      }
    </MyContext.Consumer>
  );
};

const Toolbar = props => {
  return (
    <div>
      <ThemedButton />
      <ThemedButton />
    </div>
  );
};


// Composition

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
      <MyContext.Provider value={theme}>
        <Toolbar />
      </MyContext.Provider>
      <Hello name="Patryk" />
    </div>
  );
}
