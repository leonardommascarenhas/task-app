import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import UserInfo from "./UserInfo";
import Experience from "./experience";
import Overview from "./Overview";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserInfo />
        <Experience />
      </div>
    );
  }
}

export default App;
