import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import UserInfo from "./UserInfo";
import Experience from "./experience";
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
