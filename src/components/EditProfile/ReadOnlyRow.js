import React from "react";
import "../empTAB.css";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.UserID}</td>
      <td>{contact.Address}</td>
      <td>{contact.Designation}</td>
      <td>{contact.Email}</td>
      <td>{contact.Name}</td>
      <td>{contact.dob}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        
      </td>
    </tr>
  );
};

export default ReadOnlyRow;