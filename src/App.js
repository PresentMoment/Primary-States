import React, { Component } from "react";
import "./App.css";
import Canidates from "./Components/Canidates";

class App extends Component {
  state = {
    canidates: []
  };

  render() {
    return (
      <div className="App">
        <Canidates />
      </div>
    );
  }
}

export default App;
