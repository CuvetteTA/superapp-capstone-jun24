import React from "react";
import styles from "./NotesWidget.module.css";

const NotesWidget = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>All Notes</p>
      </div>
      <textarea />
    </div>
  );
};

export default NotesWidget;
