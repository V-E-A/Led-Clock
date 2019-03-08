import Text from "./Text.js";
import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    
    const {
      timeSection, hour, singleMinutes
    } = this.props;

    return (
      <div>
     <Text text={'IT'} lit={true}/> 
     <Text text={'IS'} lit={true}/>

     <Text text={'HALF'} lit={timeSection === 6 ? true : false}/>
     <Text text={'TEN'} lit={(timeSection === 10 || timeSection === 2) ? true : false}/>
     <Text text={'QUATER'} lit={(timeSection === 9 || timeSection === 3) ? true : false}/>
     <Text text={'TWENTY'} lit={(timeSection === 8 || timeSection === 4 || timeSection === 7 || timeSection === 5) ? true : false}/>
     <Text text={'FIVE'} lit={(timeSection === 11 || timeSection === 1 || timeSection === 7 || timeSection === 5 ) ? true : false}/>

     <Text text={'MINUTES'} lit={timeSection !== 0 && timeSection !== 6 && timeSection !== 3 
      && timeSection !== 9 ? true : false} />

     <Text text={'TO'} lit={timeSection > 6 && timeSection !== 0 ? true : false}/>
     <Text text={'PAST'} lit={timeSection <= 6 && timeSection !== 0 ? true : false}/>

     <Text text={'TWO'} lit={hour === 2 || hour === 14 ? true : false}/>
     <Text text={'THREE'} lit={hour === 3 || hour === 15  ? true : false}/>
     <Text text={'ONE'} lit={hour === 1 || hour === 13? true : false}/>
     <Text text={'FOUR'} lit={hour === 4 || hour === 16 ? true : false}/>
     <Text text={'FIVE'} lit={hour === 5 || hour === 17  ? true : false}/>
     <Text text={'SIX'} lit={hour === 6 || hour === 18 ? true : false}/>
     <Text text={'SEVEN'} lit={hour === 7 || hour === 19  ? true : false}/>
     <Text text={'EIGHT'} lit={hour === 8 || hour === 20  ? true : false}/>
     <Text text={'NINE'} lit={hour === 9 || hour === 21 ? true : false}/>
     <Text text={'TEN'} lit={hour === 10 || hour === 22  ? true : false}/>
     <Text text={'ELEVEN'} lit={hour === 11 || hour === 23  ? true : false}/>
     <Text text={'TWELVE'} lit={hour === 12 || hour === 0  ? true : false}/>

     <Text text={'O`CLOCK'} lit={timeSection === 0  ? true : false}/>

     <Text text={'⬛'} lit={singleMinutes >= 1 ? true : false}/>
     <Text text={'⬛'} lit={singleMinutes >= 2 ? true : false}/>
     <Text text={'⬛'} lit={singleMinutes >= 3 ? true : false}/>
     <Text text={'⬛'} lit={singleMinutes === 4 ? true : false}/>
     
      </div>
    );
  }
}

export default Clock;


