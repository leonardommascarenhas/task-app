import React, { Component } from "react";

export default class PracticalExperience extends Component {
  state = {
    companyName: "",
    positionTitle: "",
    mainTask: "",
    initialDate: "",
    endDate: "",
    userJobExp: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitUser = (e) => {
    e.preventDefault();
    this.setState({
      positionTitle: this.state.positionTitle,
      mainTask: this.state.mainTask,
      initialDate: this.state.initialDate,
      endDate: this.state.endDate,
      userJobExp: [this.state],
    });
  };
  render() {
    return (
      <>
        <section className="userJobExperience">
          <form action="" className="form" onSubmit={this.onSubmitUser}>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              name="companyName"
              id="companyName"
              className="textInput"
              onChange={this.handleChange}
            />
            <label htmlFor="positionTitle">Position Title</label>
            <input
              type="text"
              placeholder="Position Title"
              name="positionTitle"
              id="positionTitle"
              className="textInput"
              onChange={this.handleChange}
            />
            <label htmlFor="mainTask">Main Task</label>
            <input
              type="text"
              placeholder="Main Task"
              name="mainTask"
              id="mainTask"
              className="textInput"
              onChange={this.handleChange}
            />
            <label htmlFor="initialDate">Initial Date</label>
            <input
              type="text"
              placeholder="yyyy"
              name="initialDate"
              id="initialDate"
              className="textInput"
              onChange={this.handleChange}
            />
            <label htmlFor="endDate">End Date</label>
            <input
              type="text"
              placeholder="yyyy"
              name="endDate"
              id="endDate"
              className="textInput"
              onChange={this.handleChange}
            />
          </form>
        </section>
      </>
    );
  }
}
