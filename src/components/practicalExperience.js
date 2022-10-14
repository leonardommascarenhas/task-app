import React, { Component } from "react";

export default class practicalExperience extends Component {
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
}
