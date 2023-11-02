import { useState } from "react";
import "./App.css";
import { CreateNote } from "./components/createNoteModal/CreateNote";
import EmptyArea from "./components/emptyArea/EmptyArea";
import NotesArea from "./components/notesArea/NotesArea";
import NotesTabs from "./components/notesTabs/NotesTabs";
import { getFromLocalStorage } from "./localStorage";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [selectedNote, setSelectedNote] = useState("");

  // toggle modal

  const currentNoteData = (value) => {};
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal ? <CreateNote handleModal={handleModal} /> : null}

      <div className="app">
        <NotesTabs
          handleModal={handleModal}
          setSelectedNote={setSelectedNote}
          selectedNote={selectedNote}
        />
        {selectedNote ? (
          <NotesArea
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
          />
        ) : (
          <EmptyArea />
        )}
      </div>
    </>
  );
}

export default App;
