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
      "#f0efeb",
      "#bde0fe",
      "#fcd5ce",
      "#d8f3dc",
      "#dee2ff",
      "#f7ede2",
      "#faedcb",
      "#dbcdf0",
      "#fde2e4",
      "#eff7f6",
      "#f0efeb",
      "#ecf39e",
      "#f0e6ef",
      "#dde7c7",
    ],
    breatheIn: true,
    clickMsg: "Press and hold on the circle",
    breatheMsg: "Breathe in",
    finished: false,
    started: false,
  };

  // TODO: add countdown after start button, add restart button, randomize gifs, fix text selection on phone, add more colors

  start = () => {
    let intervalId = setInterval(this.changeClickMsg, 4000);
    this.setState({ intervalId: intervalId, started: true });
    setTimeout(this.endActivity, 30000);
  };

  changeClickMsg = () => {
    if (this.state.breatheIn) {
      this.setState({
        breatheMsg: "Breathe out",
        clickMsg: "Release",
        breatheIn: false,
      });
    } else {
      this.setState({
        breatheMsg: "Breathe in",
        clickMsg: "Press and hold on the circle",
        breatheIn: true,
      });
    }
  };

  changeBgColor = (e) => {
    this.setState({
      bgColor: this.state.colorList[
        Math.floor(Math.random() * this.state.colorList.length)
      ],
    });
  };

  endActivity = () => {
    clearInterval(this.state.intervalId);
    this.setState({ finished: true, started: false, breatheIn: true });
  };

  render() {
    let { bgColor, clickMsg, breatheMsg, finished, started } = this.state;

    if (finished) {
      return (
        <div className="breathingApp" style={{ backgroundColor: bgColor }}>
          <h1>You've finished this breathing activity!</h1>
          <iframe
            src="https://giphy.com/embed/ZdUnQS4AXEl1AERdil"
            width="400"
            height="400"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/Friends-season-6-friends-tv-episode-602-ZdUnQS4AXEl1AERdil">
              via GIPHY
            </a>
          </p>
        </div>
      );
    } else if (!finished && !started) {
      return (
        <div className="breathingApp" style={{ backgroundColor: bgColor }}>
          <h1>Welcome to your daily breathing exercise!</h1>
          <br />
          <button onClick={this.start} className="btn btn-success">Start</button>
        </div>
      );
    } else if (!finished && started) {
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
