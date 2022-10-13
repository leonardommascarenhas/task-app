import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./OverviewExperience";
export default class Experience extends Component {
  state = {
    id: uniqid(),
    schoolName: "",
    userExp: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitUser = (e) => {
    e.preventDefault();
    let form = document.querySelector(".userExperience");
    form.style.display = "none";
    this.setState({
      schoolName: this.state.schoolName,
      id: uniqid(),
      userExp: [this.state],
    });
  };

  render() {
    const { userExp } = this.state;
    return (
      <>
        <section className="userExperience">
          <form className="form" onSubmit={this.onSubmitUser}>
            <input
              placeholder="schoolName"
              type="text"
              name="schoolName"
              className="textInput"
              value={this.state.userExp.schoolName}
              onChange={(e) => this.handleChange(e, "schoolName")}
            ></input>
            <button type="submit">Alo</button>
          </form>
        </section>
        <Overview userExp={userExp}></Overview>
      </>
    );
  }
}
