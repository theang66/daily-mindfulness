import React, { Component } from "react";
import "./BreathingPage.css";

import Circle from "./Circle";

class BreathingPage extends Component {
  state = {
    bgColor: "#CBEEF3",
    colorList: [
      "#83c5be",
      "#57B8FF",
      "#DCE1DE",
      "#F7EBE8",
      "#CBEEF3",
      "#a8dadc",
    ],
    breatheIn: true,
    clickMsg: "Press and hold on the circle",
    breatheMsg: "Breathe in",
    finished: false,
  };

  changeClickMsg = () => {
    console.log(this.state.breatheIn);
    if (this.state.breatheIn) {
      console.log("change to out");
      this.setState({
        breatheMsg: "Breathe out",
        clickMsg: "Release",
        breatheIn: false,
      });
    } else {
      console.log("change to in");
      this.setState({
        breatheMsg: "Breathe in",
        clickMsg: "Press and hold on the circle",
        breatheIn: true,
      });
    }
  };

  componentDidMount() {
    let intervalId = setInterval(this.changeClickMsg, 4000);
    this.setState({ intervalId: intervalId });
    // TODO: change to 5 minutes
    // TODO: add a random gif
    setTimeout(this.endActivity, 10000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.finished && !this.state.finished) {
      let intervalId = setInterval(this.changeClickMsg, 4000);
      this.setState({ intervalId: intervalId });
      // TODO: change to 5 minutes
      // TODO: add a random gif
      setTimeout(this.endActivity, 10000);
    }
  }

  endActivity = () => {
    console.log("end activity");
    clearInterval(this.state.intervalId);
    this.setState({ finished: true });
  };

  changeBgColor = (e) => {
    this.setState({
      bgColor: this.state.colorList[
        Math.floor(Math.random() * this.state.colorList.length)
      ],
    });
  };

  restart = () => {
    this.setState({ finished: false });
  };

  render() {
    let { bgColor, clickMsg, breatheMsg, finished } = this.state;

    if (finished) {
      return (
        <div className="breathingApp" style={{ backgroundColor: bgColor }}>
          <h1>You've finished this breathing activity!</h1>
          <br />
          <h1 onClick={this.restart}>Restart</h1>
        </div>
      );
    } else {
      return (
        <div className="breathingApp" style={{ backgroundColor: bgColor }}>
          <Circle
            class="circle"
            onMouseDown={this.changeBgColor}
            onMouseUp={this.changeBgColor}
          >
            <h1>{breatheMsg}</h1>
          </Circle>
          <h2 style={{ "margin-top": "110px" }}>{clickMsg}</h2>
        </div>
      );
    }
  }
}

export default BreathingPage;
