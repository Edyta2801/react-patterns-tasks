import React,
{Component}
 from "react";
import FancyBorder from "./FancyBorder";
import "./App.css";
import Hello from './Hello';
import Users from './Users';
import Chat from './Chat';
import WindowSize from './WindowSize';
import UsersContainer from './UsersContainer';
import UsersCards from './UsersCards';
import UsersTable from './UsersTable';


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




// export default function App() {
  export default class App extends Component{
    state={
      cardView:false

    };
    handleViewChange=()=>{
      this.setState({cardView:!this.state.cardView});
    };
    render(){
      const{cardView}=this.state;
  return (
    <div className="App">
      <FancyBorder color="blue">
        <h2 style={{backgroundColor:"grey"}}>1. Composition</h2>
        <SpitPane
          up={<FancyBorder color="red">Hello</FancyBorder>}
          bottom={<h1>Hello</h1>}
        />
        <Grid
       left={<p style={{marginRight:"200px", color:"red"}}>Anna</p>}
       right={<p style={{marginLeft:"200px", color:"blue"}}>Patryk</p>}/>
      </FancyBorder>
      <h2 style={{backgroundColor:"grey"}}>2. Context API</h2>
      <MyContext.Provider value={theme}>
        <Toolbar />
      </MyContext.Provider>
      <h2 style={{backgroundColor:"grey"}}>3. Higher Order Component</h2>
      <Hello name="Patryk" />
      <h2 style={{backgroundColor:"grey"}}>4. Separation state and view</h2>
      <Users/>
      <h2 style={{backgroundColor:"grey"}}>5. Compound-component after</h2>
      <Chat>
          <Chat.Messages />
          <Chat.Input />
          <Chat.Button />
        </Chat>
        <h2 style={{backgroundColor:"grey"}}>6. Własne hooki</h2>
        <WindowSize/>
        <h2 style={{backgroundColor:"grey"}}>7. Render props</h2>
        <button onClick={this.handleViewChange}>change view</button>
        <UsersContainer
          cardView={cardView}
          render={({ users }) =>
            cardView === true ? (
              <UsersCards users={users} />
            ) : (
              <UsersTable users={users} />
            )
          }
        />
    </div>
  );
}
  }
