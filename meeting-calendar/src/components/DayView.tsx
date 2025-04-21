import React from "react";
import MeetingView from "./MeetingView";
import classes from "../App.module.css";
import { Meeting } from "../types/types";

interface DayViewProps {
  hours: string[];
  meetings: Meeting[];
}

function DayView({ hours, meetings }: DayViewProps): React.ReactNode {
  return (
    <div className={classes.day}>
      {hours.slice(1).map((eachHour) => {
        return <div className={classes.hourSlot} key={eachHour}></div>;
      })}
      <MeetingView meetings={meetings} />
    </div>
  );
}

export default DayView;
