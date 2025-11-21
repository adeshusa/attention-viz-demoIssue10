import React from "react";

export default function NotesPanel() {
  return (
    <div className="notes-wrapper">
      <h2 className="chapter-heading">Notes</h2>
      <p className="notes-hint">
        Notes can be written here. This component can be expanded with more functionality.
      </p>
      <textarea
        className="notes-textarea"
        placeholder="Write notes here..."
      />
    </div>
  );
}
