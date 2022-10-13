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
    console.log(this.state);
  };

  onSubmitUser = (e) => {
    e.preventDefault();
    this.setState({
      userExp: [this.state],
      schoolName: "",
      id: uniqid(),
    });
    console.log(this.state);
  };

  render() {
    const { userExp } = this.state;
    return (
      <section>
        <form className="form" onSubmit={this.onSubmitUser}>
          <input
            placeholder="schoolName"
            type="text"
            name="schoolName"
            className="textInput"
            value={this.state.schoolName}
            onChange={(e) => this.handleChange(e, "schoolName")}
          ></input>
          <button type="submit">Alo</button>
        </form>
        <Overview userExp={userExp} />
      </section>
    );
  }
}
