import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import UserInfo from "./UserInfo";
import Experience from "./experience";
import PracticalExperience from "./PracticalExperience";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserInfo />
        <Experience />
        <PracticalExperience />
      </div>
    );
  }
}

export default App;
