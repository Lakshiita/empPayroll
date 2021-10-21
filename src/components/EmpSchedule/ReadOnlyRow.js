import React from "react";
import "./empTAB.css";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.sid}</td>
      <td>{contact.work_hrs}</td>
      <td>{contact.status}</td>
      <td>{contact.date}</td>
      
    </tr>
  );
};

export default ReadOnlyRow;