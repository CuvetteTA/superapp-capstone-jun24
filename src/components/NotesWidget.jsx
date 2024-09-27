import React, { useEffect, useState } from "react";
import styles from "./NotesWidget.module.css";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "react-modal";
import { MdDelete } from "react-icons/md";

const NotesWidget = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const openModal = (note) => {
    setCurrentNote(note);
    setNewNoteTitle(note.title);
    setNewNoteContent(note.content);
    setIsModalOpen(true);
  };

  const handleSaveNote = () => {
    const updatedNotes = notes.map((note) =>
      note.id === currentNote.id
        ? { ...note, title: newNoteTitle, content: newNoteContent }
        : note
    );
    setNotes(updatedNotes);
    setIsModalOpen(false);
  };

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      title: newNoteTitle,
      content: newNoteContent,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setNewNoteTitle("");
    setNewNoteContent("");
    setIsModalOpen(false);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>All Notes</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className={styles.addNoteButton}
        >
          Add +
        </button>
      </div>
      <div className={styles.noteList}>
        {notes.length === 0 ? (
          <p>No notes available. Please add a note.</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className={styles.noteContainer}>
              <h2 className={styles.noteTitle}>{note.title}</h2>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className={styles.noteContent}>{note.content}</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IoIosArrowForward
                    onClick={() => openModal(note)}
                    className={styles.arrowIcon}
                  />
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className={styles.deleteButton}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            padding: "0",
          },
        }}
      >
        <div className={styles.modal}>
          <h2>{currentNote ? "Edit Note" : "Add Note"}</h2>
          <input
            type="text"
            placeholder="Title"
            value={newNoteTitle}
            onChange={(e) => setNewNoteTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={newNoteContent}
            onChange={(e) => setNewNoteContent(e.target.value)}
            rows={10}
          />
          <button onClick={currentNote ? handleSaveNote : handleAddNote}>
            {currentNote ? "Save Changes" : "Add Note"}
          </button>
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default NotesWidget;
