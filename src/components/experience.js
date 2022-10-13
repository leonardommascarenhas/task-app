import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./OverviewExperience";
export default class Experience extends Component {
  state = {
    id: uniqid(),
    titleOfStudy: "",
    dateOfStudy: "",
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
      id: uniqid(),
      schoolName: this.state.schoolName,
      titleOfStudy: this.state.titleOfStudy,
      dateOfStudy: this.state.dateOfStudy,
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
              placeholder="School Name"
              type="text"
              name="schoolName"
              className="textInput"
              value={this.state.userExp.schoolName}
              onChange={(e) => this.handleChange(e, "schoolName")}
            ></input>
            <input
              placeholder="Title Of Study"
              type="text"
              name="titleOfStudy"
              className="textInput"
              value={this.state.userExp.titleOfStudy}
              onChange={(e) => this.handleChange(e, "titleOfStudy")}
            ></input>
            <input
              placeholder="Date Of Study"
              type="text"
              name="dateOfStudy"
              className="textInput"
              value={this.state.userExp.dateOfStudy}
              onChange={(e) => this.handleChange(e, "dateOfStudy")}
            ></input>
            <button type="submit">Alo</button>
          </form>
        </section>
        <Overview userExp={userExp}></Overview>
      </>
    );
  }
}
