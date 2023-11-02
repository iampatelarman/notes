import React, { useEffect, useState } from "react";

import "./NotesArea.css";

import Note from "../note/Note";
import enterImg from "../../Images/Vector.png";
import { getFromLocalStorage } from "../../localStorage";

const NotesArea = ({ selectedNote, setSelectedNote }) => {
  const [currentNote, setCurrentNote] = useState("");
  const [noteText, setNoteText] = useState("");
  useEffect(() => {
    let data = getFromLocalStorage("Notes");
    data = data?.filter((item) => item.name === selectedNote);
    setCurrentNote(data[0]);
  }, [selectedNote]);

  const addNote = () => {
    if (!noteText) return;
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes();
    let today =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    let note = { time, today, noteText };

    let notesArr = currentNote?.notes ? [...currentNote?.notes] : [];
    notesArr.push(note);
    setCurrentNote({ ...currentNote, notes: notesArr });
    let data = getFromLocalStorage("Notes");
    let newData = data.map((item) => {
      if (item.name === currentNote.name) {
        return { ...currentNote, notes: notesArr };
      }
      return item;
    });
    localStorage.setItem("Notes", JSON.stringify(newData));
    setNoteText("");
  };

  return (
    <div className={selectedNote ? "notes-area" : "notes-area hide-note-area"}>
      <div className="notes-title">
        <button className="arrow-btn" onClick={() => setSelectedNote("")}>
          <span className="material-icons">arrow_back</span>
        </button>

        <div className="single-note-tab ">
          <div
            className="note-icon"
            style={{ backgroundColor: currentNote?.color }}
          >
            {currentNote?.name?.slice(0, 2)}
          </div>
          <div className="note-name">{currentNote?.name}</div>
        </div>
      </div>
      <div className="notes-container">
        {currentNote?.notes?.map((item, index) => {
          return <Note note={item} key={index} />;
        })}
      </div>

      <div className="note-input">
        <textarea
          name="note-text"
          id=""
          rows="6"
          placeholder="Enter Your text here..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addNote();
          }}
        ></textarea>
        <button className="enterBtn" onClick={addNote}>
          <img src={enterImg} alt="" className="enter-img" />
        </button>
      </div>
    </div>
  );
};

export default NotesArea;
