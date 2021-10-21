import { color } from "@mui/system";
import React from "react";
import "../empTAB.css";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.UserID}</td>
      <td>{contact.duration}</td>
      <td>{contact.status}</td>
      <td>{contact.from}</td>
      
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
          style={{backgroundColor:"green"}}
        >
          Accept
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)} style={{backgroundColor:"red"}}>
          Ignore
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;