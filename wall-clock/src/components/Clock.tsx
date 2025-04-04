import React from "react";
import Mark from "./Mark";
import Circle from "./Circle";
import Hands from "./Hands";
import useClock from "../hooks/useClock";

import getRomanNumerals from "../helpers/getRomanNumerals";
import styled from "styled-components";

interface StyledClockProps {
  className?: string;
  size?: number;
}

function Clock({ className, size = 300 }: StyledClockProps): React.ReactNode {
  const time = useClock();

  return (
    <Circle size={size} className={className}>
      {Array(12)
        .fill(null)
        .map((_, i) => {
          return (
            <Mark key={i} rotation={i * 30 + "deg"}>
              {getRomanNumerals(i)}
            </Mark>
          );
        })}
      <Hands time={time} borderWidth={10} />
    </Circle>
  );
}

const StyledClock = styled(Clock)`
  position: relative;
  border: 10px solid black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export default StyledClock;
