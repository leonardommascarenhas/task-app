import React, { Component } from "react";
import Overview from "./Overview";
import uniqid from "uniqid";
import "../App.css";
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
      userInfo: [this.state],
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
      <div className="formulario">
        <form className="form" onSubmit={this.onSubmitUser}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            className="textInput"
            value={this.state.name}
            onChange={(e) => this.handleChange(e, "name")}
          ></input>
          <input
            placeholder="Last Name"
            type="text"
            name="lastName"
            className="textInput"
            value={this.state.lastName}
            onChange={(e) => this.handleChange(e, "lastName")}
          ></input>
          <input
            placeholder="email"
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
