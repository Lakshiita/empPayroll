import React from "react";
import "../empTAB.css";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.Designation}</td>
      <td>{contact.salary}</td>
    </tr>
  );
};

export default ReadOnlyRow;