import React from "react";
import classes from "../App.module.css";
import { oneUnit, hrOffset, columnWidths } from "../config/config";
import { Meeting } from "../types/types";
import { getDuration } from "../utils/getDuration";

interface MeetingProps {
  meetings: Meeting[];
}

const MeetingView: React.FC<MeetingProps> = ({ meetings }) => {
  return (
    <div className={classes.meetings}>
      {meetings.map((meeting) => {
        const duration = getDuration(meeting.start, meeting.end);
        const [startHr, startMin] = meeting.start
          .split("T")[1]
          .split(":")
          .map((x) => Number(x));
        console.log({ startHr, startMin });
        const width = columnWidths.get(meeting.column);
        const height = duration * oneUnit;
        const top = ((startHr - hrOffset) * 60 + startMin) * oneUnit;

        return (
          <button
            key={meeting.id}
            className={classes.meeting}
            style={{
              width: `${width}%`,
              height: `${height}%`,
              top: `${top}%`,
              left: `unset`,
            }}
          >
            <span>{meeting.title}</span>
            <span>
              {meeting.start.split("T")[1]} - {meeting.end.split("T")[1]}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default MeetingView;
