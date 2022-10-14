import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import UserInfo from "./UserInfo";
import Experience from "./experience";
import PracticalExperience from "./PracticalExperience";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="contentContainer">
          <div className="content">
            <UserInfo />
            <Experience />
            <PracticalExperience />
          </div>
        </div>
      </>
    );
  }
}

export default App;
