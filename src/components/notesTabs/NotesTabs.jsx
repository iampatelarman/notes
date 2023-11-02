import React from "react";
import SingleNoteTab from "../singleNote/SingleNoteTab";
import "./notesTabs.css";
import { getFromLocalStorage } from "../../localStorage";

const NotesTabs = ({ handleModal, setSelectedNote, selectedNote }) => {
  let tabsList = getFromLocalStorage("Notes");

  return (
    <div className={selectedNote ? "tabs-area mobileView" : "tabs-area"}>
      <h1>Pocket Notes</h1>

      <div className="tabs">
        <button className="create-btn" onClick={handleModal}>
          <span className="material-icons">add</span>
          Create Notes Group
        </button>

        {tabsList?.map(({ name, color }, index) => {
          return (
            <SingleNoteTab
              name={name}
              color={color}
              key={index}
              setSelectedNote={setSelectedNote}
              selectedNote={selectedNote}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NotesTabs;
