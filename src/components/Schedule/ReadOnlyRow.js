import React from "react";
import "./empTAB.css";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.UserID}</td>
      <td>{contact.sid}</td>
      <td>{contact.work_hr}</td>
      <td>{contact.status}</td>
      <td>{contact.date}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;