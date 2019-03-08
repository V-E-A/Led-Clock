import Clock from "./Clock.js";
import React, { Component } from "react";
// import styled from "@emotion/styled/macro";
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
    let hour = minutes < 30 ? this.state.hour : this.state.hour + 1
 
    return (
      <div>
        <Clock
          timeSection={timeSection}
          hour={hour}
          singleMinutes={singleMinutes}
        />
      </div>
    );
  }
}

export default App;

// const ClockFrame = styled.div`
// margin:0px auto;
// width: 600px;
// display: flex;
// flex-direction: column;
// align-items: center;
// align-content: center;
// justify-content: center;
  
// `;
