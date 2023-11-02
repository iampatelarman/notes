import React, { useState } from "react";
import "./createNote.css";
import { addToLocalStorage } from "../../localStorage";

export const CreateNote = ({ handleModal }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && color) {
      handleModal();
      addToLocalStorage("Notes", { name, color });
    }
  };
  return (
    <div className="note-modal">
      <div className="create-card">
        <button className="close-btn" onClick={handleModal}>
          <span className="material-icons">close</span>{" "}
        </button>
        <h1>Create New Notes group</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Group Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your group name...."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="color-picker">
            <label htmlFor="color">Choose colour</label>
            <input
              type="radio"
              name="color"
              value="#b38bfa"
              id="purple"
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="radio"
              name="color"
              value="#ff79f2"
              id="pink"
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="radio"
              name="color"
              value="#43e6fc"
              id="aqua"
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="radio"
              name="color"
              value="#f19576"
              id="orange"
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="radio"
              name="color"
              value="#0047ff"
              id="blue"
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="radio"
              name="color"
              value="#6691ff"
              id="lightblue"
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
