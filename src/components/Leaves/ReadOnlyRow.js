import { color } from "@mui/system";
import React from "react";
import "../empTAB.css";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.duration}</td>
      <td>{contact.status}</td>
      <td>{contact.from}</td>
      
    </tr>
  );
};

export default ReadOnlyRow;