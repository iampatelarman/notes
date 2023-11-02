import React from "react";
import "./singleNoteTab.css";

const SingleNote = ({ name, color, setSelectedNote, selectedNote }) => {
  return (
    <div
      className={
        selectedNote === name ? "single-note-tab active" : "single-note-tab "
      }
      onClick={() => {
        setSelectedNote(name);
      }}
    >
      <div className="note-icon" style={{ backgroundColor: color }}>
        {name?.slice(0, 2)}
      </div>
      <div className="note-name">{name}</div>
    </div>
  );
};

export default SingleNote;
