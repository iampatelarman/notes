import React from "react";
import "./note.css";
const Note = ({ note }) => {
  const { time, today, noteText } = note;
  return (
    <div className="note">
      <div className="note-time">
        <div className="time">{time}</div>
        <div className="date">{today}</div>
      </div>
      <div className="note-text">{noteText}</div>
    </div>
  );
};

export default Note;
