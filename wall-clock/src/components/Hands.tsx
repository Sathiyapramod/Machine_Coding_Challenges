import React from "react";
import { SecondHand, HourHand, MinuteHand, Dot } from "./Others";

interface HandsProps {
  borderWidth: number;
  time: Date;
}

function Hands({ borderWidth = 10, time }: HandsProps): React.ReactNode {
  return (
    <div>
      <SecondHand
        borderWidth={borderWidth}
        rotation={time.getSeconds() * 6 + "deg"}
      />
      <MinuteHand
        borderWidth={borderWidth}
        rotation={(time.getMinutes() + time.getSeconds() / 60) * 6 + "deg"}
      />
      <HourHand
        borderWidth={borderWidth}
        rotation={
          ((time.getHours() % 12) +
            time.getMinutes() / 60 +
            time.getSeconds() / 3600) *
            30 +
          "deg"
        }
      />
      <Dot size={10} />
    </div>
  );
}

export default Hands;
