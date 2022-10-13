import React, { Component } from "react";
import Overview from "./Overview";
import uniqid from "uniqid";
import "../App.css";
class UserInfo extends Component {
  state = {
    name: "",
    lastName: "",
    id: uniqid(),
    userInfo: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitUser = (e) => {
    e.preventDefault();
    let userInfoSection = document.getElementById("userInfo");
    userInfoSection.style.display = "none";
    this.setState({
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      id: uniqid(),
      userInfo: [this.state],
    });
    console.log(this.state.userInfo);
  };
  render() {
    const { userInfo } = this.state;
    return (
      <>
        <section id="userInfo">
          <form className="form" onSubmit={this.onSubmitUser}>
            <input
              placeholder="Name"
              type="text"
              name="name"
              className="textInput"
              id="name"
              onChange={(e) => this.handleChange(e, "name")}
            ></input>
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              className="textInput"
              id="lastName"
              onChange={(e) => this.handleChange(e, "lastName")}
            ></input>
            <input
              placeholder="Email"
              type="email"
              name="email"
              className="textInput"
              id="email"
              onChange={(e) => this.handleChange(e, "email")}
            ></input>
            <button type="submit">Click</button>
          </form>
        </section>
        <Overview user={userInfo} />
      </>
    );
  }
}

export default UserInfo;
