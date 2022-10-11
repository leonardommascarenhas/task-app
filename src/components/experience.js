import React, { Component } from "react";

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <input
          placeholder="Education"
          type="text"
          name="schoolName"
          className="textInput"
          value={this.props.userExperience}
        ></input>
      </section>
    );
  }
}
