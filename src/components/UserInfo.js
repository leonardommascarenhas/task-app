import React, { Component } from "react";
import Overview from "./Overview";
import uniqid from "uniqid";
import "../App.css";
class UserInfo extends Component {
  state = {
    name: "",
    lastName: "",
    id: uniqid(),
    userExperience: { schoolName: "" },
    userInfo: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  onSubmitUser = (e) => {
    e.preventDefault();
    this.setState({
      userInfo: [this.state],
      name: "",
      lastName: "",
      id: uniqid(),
    });
  };
  render() {
    const { userInfo } = this.state;
    return (
      <div>
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
            placeholder="Email"
            type="email"
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

export default UserInfo;
