import React, { Component } from "react";
import "./App.css";
import Keypad from "./Keypad";
import Result from "./Result";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backSpace();
    } else {
      this.setState({ result: this.state.result + button });
      console.log("express edited");
    }
  };
  calculate() {
    var checkResult = "";
    checkResult = this.state.result;

    try {
      // eslint-disable-next-line
      this.setState({ result: eval(checkResult) });
    } catch (e) {
      this.setState({ result: "Enter valid Expression" });
      console.log(e.message);
    }
  }
  reset() {
    this.setState({result : " "})
    console.log("result cleared")
  }
  backSpace() {
    this.setState({result: this.state.result.splice(0, -1)})
  }
  render() {
    return (
      <div className="cal-body">
      {/* <div>{this.state.result} </div> */}
        <Result  result={this.state.result} />
        <Keypad onClick={this.onClick} />
        
      </div>
    )
    
  }
}
