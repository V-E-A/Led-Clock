import Text from "./Text.js";
import React from "react";
import styled from "@emotion/styled/macro";

class Clock extends React.PureComponent {
  
  render() {
    const { timeSection, hour, singleMinutes } = this.props;

    return (
      <ClockFrame>
        <RowWrap>
          <Text text={"IT"} lit={true} />
          <Text text={"IS"} lit={true} />
          <Text text={"HALF"} lit={timeSection === 6 ? true : false} />
          <Text
            text={"TEN"}
            lit={timeSection === 10 || timeSection === 2 ? true : false}
          />
        </RowWrap>

        <RowWrap>
          <Text
            text={"QUARTER"}
            lit={timeSection === 9 || timeSection === 3 ? true : false}
          />
          <Text
            text={"TWENTY"}
            lit={
              timeSection === 8 ||
              timeSection === 4 ||
              timeSection === 7 ||
              timeSection === 5
                ? true
                : false
            }
          />
        </RowWrap>

        <RowWrap>
          <Text
            text={"FIVE"}
            lit={
              timeSection === 11 ||
              timeSection === 1 ||
              timeSection === 7 ||
              timeSection === 5
                ? true
                : false
            }
          />
          <Text
            text={"MINUTES"}
            lit={
              timeSection !== 0 &&
              timeSection !== 6 &&
              timeSection !== 3 &&
              timeSection !== 9
                ? true
                : false
            }
          />
          <Text
            text={"TO"}
            lit={timeSection > 6 && timeSection !== 0 ? true : false}
          />
        </RowWrap>

        <RowWrap>
          <Text
            text={"PAST"}
            lit={timeSection <= 6 && timeSection !== 0 ? true : false}
          />
          <Text text={"TWO"} lit={hour === 2 || hour === 14 ? true : false} />
          <Text text={"THREE"} lit={hour === 3 || hour === 15 ? true : false} />
        </RowWrap>

        <RowWrap>
          <Text text={"ONE"} lit={hour === 1 || hour === 13 ? true : false} />
          <Text text={"FOUR"} lit={hour === 4 || hour === 16 ? true : false} />
          <Text text={"FIVE"} lit={hour === 5 || hour === 17 ? true : false} />
        </RowWrap>

        <RowWrap>
          <Text text={"SIX"} lit={hour === 6 || hour === 18 ? true : false} />
          <Text text={"SEVEN"} lit={hour === 7 || hour === 19 ? true : false} />
          <Text text={"EIGHT"} lit={hour === 8 || hour === 20 ? true : false} />
        </RowWrap>

        <RowWrap>
          <Text text={"NINE"} lit={hour === 9 || hour === 21 ? true : false} />
          <Text text={"TEN"} lit={hour === 10 || hour === 22 ? true : false} />
          <Text
            text={"ELEVEN"}
            lit={hour === 11 || hour === 23 ? true : false}
          />
        </RowWrap>

        <RowWrap>
          <Text
            text={"TWELVE"}
            lit={hour === 12 || hour === 0 ? true : false}
          />
          <Text text={"O`CLOCK"} lit={timeSection === 0 ? true : false} />
        </RowWrap>

        <MinuteRowWrap>
          <Text
            text={<i class="fas fa-square" />}
            lit={singleMinutes >= 1 ? true : false}
          />
          <Text
            text={<i class="fas fa-square" />}
            lit={singleMinutes >= 2 ? true : false}
          />
          <Text
            text={<i class="fas fa-square" />}
            lit={singleMinutes >= 3 ? true : false}
          />
          <Text
            text={<i class="fas fa-square" />}
            lit={singleMinutes === 4 ? true : false}
          />
        </MinuteRowWrap>
      </ClockFrame>
    );
  }
}

export default Clock;

const RowWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 4%;
`;

const MinuteRowWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3%;
`;

const ClockFrame = styled.div`
  width: 80vmin;
  height: 80vmin;
  background: linear-gradient(
    172deg,
    rgb(255, 255, 255) -1%,
    rgba(255, 255, 255, 0.15) 12%,
    rgba(255, 255, 255, 0) 16%,
    rgba(255, 255, 255, 0) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 13%;
  border-radius: 2%;
  box-shadow: 9px 11px 22px -9px rgba(0, 0, 0, 1);
`;
