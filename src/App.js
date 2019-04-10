import React, { Component } from "react";
import Image from "./components/image";
import Clock from "./components/clock";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App App-header">
        <Image />
        <Clock />
      </div>
    );
  }
}

export default App;
