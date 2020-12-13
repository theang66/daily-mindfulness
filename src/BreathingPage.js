import React, { Component } from "react";
import logo from "./logo.svg";
import "./BreathingPage.css";

class BreathingPage extends Component {
state = {
    bgColor: "#6DBE45",
    colorList: ["#57B8FF", "#DCE1DE", "#F7EBE8", "#CBEEF3", "#a8dadc", "#83c5be"],
  };

  changeBgColor = (e) => {
    this.setState({
      bgColor: this.state.colorList[Math.floor(Math.random() * this.state.colorList.length)],
    });
  };

  render() {
    let { bgColor } = this.state;

    return (
      <div className="breathingApp" style={{ backgroundColor: bgColor}}>
        <h1 onClick={this.changeBgColor} className="circle">
          An animated element
        </h1>
      </div>
    );
  }
}

export default BreathingPage;
