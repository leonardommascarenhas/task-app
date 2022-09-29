import React, { Component } from "react";
import Overview from "./Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      lastName: "",
      email: "",
      id: uniqid(),
      userInfo: [],
    };
  }

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  onSubmitUser = (e) => {
    e.preventDefault();
    this.setState({
      userInfo: this.state.userInfo.concat(this.state),
      name: "",
      lastName: "",
      email: "",
      id: uniqid(),
    });
    console.log(this.state);
  };
  render() {
    const { userInfo } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.onSubmitUser}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="textInput"
            value={this.state.name}
            onChange={(e) => this.handleChange(e, "name")}
          ></input>
          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            name="lastName"
            className="textInput"
            value={this.state.lastName}
            onChange={(e) => this.handleChange(e, "lastName")}
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="textInput"
            value={this.state.email}
            onChange={(e) => this.handleChange(e, "email")}
          ></input>
          <button type="submit">Click</button>
        </form>
        <Overview user={userInfo} />
      </div>
    );
  }
}

export default App;
