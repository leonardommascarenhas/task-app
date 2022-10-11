import React, { Component } from "react";
import Overview from "./Overview";
import uniqid from "uniqid";
import "../App.css";
import Header from "./Header";
import Experience from "./experience";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastName: "",
      id: uniqid(),
      userExperience: { schoolName: "" },
      userInfo: [],
    };
  }

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
      userExperience: { schoolName: "" },

      id: uniqid(),
    });
    console.log(this.state);
  };
  render() {
    const { userInfo } = this.state;
    return (
      <div>
        <Header />
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
            placeholder="schoolName"
            type="text"
            name="schoolName"
            className="textInput"
            value={this.state.userExperience.schoolName}
            onChange={(e) =>
              this.setState({ userExperience: { schoolName: e.target.value } })
            }
          ></input>
          <button type="submit">Click</button>
        </form>

        <Overview user={userInfo} />
      </div>
    );
  }
}

export default App;
