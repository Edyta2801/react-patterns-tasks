import React from "react";
import UsersList from "../UsersList";

class Users extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => this.setState({ users: data.results }));
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <UsersList users={users} />
      </div>
    );
  }
}

export default Users;

// Komponent który zajmuje sie pobieraniem danych z API, tam jest stan i ten stan jest przekazywany w dół do komponentu UsersList.
// Ten komponent ma tylko pobrać dane i przekazać je niżej.