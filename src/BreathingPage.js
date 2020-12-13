import React, { Component } from "react";
import "./BreathingPage.css";

import Circle from "./Circle";

class BreathingPage extends Component {
  state = {
    bgColor: "#6DBE45",
    colorList: [
      "#57B8FF",
      "#DCE1DE",
      "#F7EBE8",
      "#CBEEF3",
      "#a8dadc",
      "#83c5be",
    ],
    breatheIn: true,
    clickMsg: "Press and hold on the circle",
  };

  changeClickMsg = () => {
    console.log(this.state.breatheIn);
    if (this.state.breatheIn) {
      console.log("change to out");
      this.setState({ clickMsg: "Release" });
      this.state.breatheIn = false;
    } else {
      console.log("change to in");
      this.setState({ clickMsg: "Press and hold on the circle" });
      this.state.breatheIn = true;
    }
  };

  componentDidMount() {
    let intervalId = setInterval(this.changeClickMsg, 4000);
    this.setState({ intervalId: intervalId });
    // TODO: change to 5 minutes
    setTimeout(this.endActivity, 10000);
  }

  endActivity = () => {
    console.log("end activity");
    clearInterval(this.state.intervalId);
  };

  changeBgColor = (e) => {
    this.setState({
      bgColor: this.state.colorList[
        Math.floor(Math.random() * this.state.colorList.length)
      ],
    });
  };

  render() {
    let { bgColor, clickMsg } = this.state;

    return (
      <div className="breathingApp" style={{ backgroundColor: bgColor }}>
        <Circle onMouseDown={this.changeBgColor} onMouseUp={this.changeBgColor}>
          <h1>An animated element</h1>
          <h2>{clickMsg}</h2>
        </Circle>
      </div>
    );
  }
}

export default BreathingPage;
