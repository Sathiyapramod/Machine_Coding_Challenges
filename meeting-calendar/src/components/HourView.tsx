import React from "react";
import classes from "../App.module.css";

interface HourViewProps {
  hours: string[];
}

function HourView({ hours }: HourViewProps): React.ReactNode {
  return (
    <div className={classes.hourLabels}>
      {hours.map((eachHour) => {
        return (
          <div key={eachHour} className={classes.hour}>
            <span key={eachHour}>{eachHour}</span>
          </div>
        );
      })}
    </div>
  );
}

export default HourView;
