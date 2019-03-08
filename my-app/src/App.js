import Clock from "./Clock.js";
import React, { Component } from "react";
let moment = require("moment");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: moment().minute(),
      hour: moment().hour(),
      fiveMinIntervals: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
    };
  }

  componentDidMount() {
    this.seconds = setInterval(
      () =>
        this.setState({ minutes: moment().minute(), hour: moment().hour() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.seconds);
  }

  render() {
    let minutes = this.state.minutes;
    let timeSection = Math.floor(minutes / 5);
    let interval = this.state.fiveMinIntervals[timeSection];
    let singleMinutes = minutes - interval
 
    return (
      <div>
        <Clock
          timeSection={timeSection}
          hour={this.state.hour}
          singleMinutes={singleMinutes}
        />
      </div>
    );
  }
}

export default App;
