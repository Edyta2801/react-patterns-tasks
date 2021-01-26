import { Component } from "react";

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

    return this.props.render({ users });
  }
}

export default UsersContainer;