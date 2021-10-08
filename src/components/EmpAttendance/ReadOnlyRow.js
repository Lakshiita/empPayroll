import React from "react";
import "../empTAB.css";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.Date}</td>
      <td>{contact.Status}</td>
      <td>{contact.UserID}</td>
    </tr>
  );
};

export default ReadOnlyRow;