import React from "react";
import "./empTAB.css";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.UserID}</td>
      <td>{contact.Name}</td>
      <td>{contact.Address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.Email}</td>
      <td>{contact.Designation}</td>
      <td>{contact.dob}</td>
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