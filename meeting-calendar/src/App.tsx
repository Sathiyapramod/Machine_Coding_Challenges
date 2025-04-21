import { useState } from "react";

import { hours, meetingList as meetings } from "./config/config";
import classes from "./App.module.css";
import { Meeting } from "./types/types";
import HourView from "./components/HourView";
import DayView from "./components/DayView";

function App() {
  const [meetingList, setList] = useState<Meeting[]>(meetings);
  const [newMeeting, setMeeting] = useState<Meeting>({
    title: "",
    start: "",
    end: "",
    column: 0,
    conflicts: 0,
    modified: false,
  });

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setList((pv: Meeting[]) => {
      const count = pv.length;
      return [...pv, { ...newMeeting, id: count, column: count }];
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeeting((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.formInputs}>
        <h2>Meeting Schedule</h2>
        <div className={classes.inputBox}>
          <label htmlFor="title">Meeting Name</label>
          <input type="text" name="title" onChange={handleChange} />
        </div>
        <div className={classes.inputBox}>
          <label htmlFor="start">Start Time</label>
          <input type="time" name="start" onChange={handleChange} />
        </div>
        <div className={classes.inputBox}>
          <label htmlFor="end">End Time</label>
          <input type="time" name="end" onChange={handleChange} />
        </div>
        <button type="submit">Create Meeting</button>
      </form>
      <div className={classes.holder}>
        <HourView hours={hours} />
        <DayView hours={hours} meetings={meetingList} />
      </div>
    </div>
  );
}

export default App;
