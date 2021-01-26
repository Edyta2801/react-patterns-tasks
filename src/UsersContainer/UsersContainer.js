import React, { Component } from "react";
import UsersTable from "../UsersTable";
import UsersCards from "../UsersCards";

class UsersContainer extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => this.setState({ users: data.results }))
      .catch(error => console.error(error));
  }
  render() {
    const { users } = this.state;
    const {cardView}=this.props;
    return (
      <div>
       {cardView===true ? <UsersCards users={users}/> : <UsersTable users={users}/>}
      </div>
    );
  }
}

export default UsersContainer;